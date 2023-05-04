import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop, useDrag } from 'react-dnd';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { removeIngredient, selectBurger, setItems } from '../../store/slices/burger-slice';

import style from './element-main.module.css';
// https://react-dnd.github.io/react-dnd/about
// https://react-dnd.github.io/react-dnd/examples/sortable/simple
export default function ElementMain(props) {
  const { index, name } = props;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { mainOrSauce: items = [] } = useSelector(selectBurger);
  const removeElement = (ind) => dispatch(removeIngredient(ind));

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      const coppiedStateArray = [...items];
      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
      dispatch(setItems(coppiedStateArray));
    }
  };

  const [, drop] = useDrop({
    accept: ['column'],
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
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
    type: 'column',
    item: { index, name },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.1 : 1 }),
  });

  drag(drop(ref));

  return (
    <li className={style.item} style={{ opacity }} ref={ref}>
      <div className={`${style.drag} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement {...props} handleClose={() => removeElement(index)} />
    </li>
  );
}

ElementMain.protoType = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
