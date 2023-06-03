import React from 'react';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import ConstructorBlock from '../constructor-block';

import { selectBurger, setMainOrSauce } from '../../store/slices';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  MAIN, BUN, SAUCE, COLUMN, filterObject, getBackgroundColor,
} from '../../utils';

import style from './constructor-blocks.module.css';

export default function ConstructorBlocks() {
  const dispatch = useAppDispatch();
  const burger = useAppSelector(selectBurger);
  const { mainOrSauce: items = [] } = burger;
  const [{ isOver, canDrop }, refMain] = useDrop({
    accept: [MAIN, SAUCE, BUN, COLUMN],
    drop: (c: TypeCard) => {
      const elementWithUniqueId = { ...filterObject(c), uniqueId: uuidv4() };
      dispatch(setMainOrSauce(elementWithUniqueId));

      return elementWithUniqueId;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: ({ type }) => type === MAIN || type === SAUCE,
  });
  const getBorder = () => (isOver ? '2px dashed honeydew' : '');
  const getClass = () => `${style.description} text text_type_main-small text_color_inactive`;

  return (
    <ul
      className={classNames(style.items, { [style.border]: items.length === 0 })}
      style={{ backgroundColor: getBackgroundColor(isOver, canDrop), border: getBorder() }}
      ref={refMain}
      data-test="constructor-middle"
    >
      {items.length === 0
        ? <span className={getClass()}>+ ингредиент</span>
        : items.map((item: TypeElementMain, i: number) => (
          <ConstructorBlock key={item.uniqueId} {...item} index={i} />
        ))}
    </ul>
  );
}
