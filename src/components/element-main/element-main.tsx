/* eslint-disable no-param-reassign */
import React, { useRef } from 'react';
import { useDrop, useDrag, DropTargetMonitor } from 'react-dnd';
import classNames from 'classnames';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { removeIngredient, selectBurger, setItems } from '../../store/slices';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { COLUMN } from '../../utils';

import style from './element-main.module.css';
// https://react-dnd.github.io/react-dnd/about
// https://react-dnd.github.io/react-dnd/examples/sortable/simple
export default function ElementMain(props: TypeElementMain) {
  const { index, name } = props;
  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useAppDispatch();
  const { mainOrSauce: items = [] } = useAppSelector(selectBurger);
  const removeElement = (ind: number) => dispatch(removeIngredient(ind));

  const moveCardHandler = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      const coppiedStateArray = [...items];
      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
      dispatch(setItems(coppiedStateArray));
    }
  };

  const [, drop] = useDrop({
    accept: [COLUMN],
    hover(item: TypeCard & { index: number}, monitor: DropTargetMonitor<TypeCard & {
      index: number;
  }, unknown>) {
      if (!ref.current) {
        return;
      }

      const dragIndex: number = item.index;
      const hoverIndex: number = index!;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect() as DOMRect;
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: COLUMN,
    item: { index, name },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.1 : 1 }),
  });

  drag(drop(ref));

  return (
    <li className={style.item} style={{ opacity }} ref={ref}>
      <div className={classNames(style.drag, 'mr-2')}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement {...props} handleClose={() => removeElement(index)} />
    </li>
  );
}
