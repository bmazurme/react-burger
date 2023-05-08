import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import ConstructorBlock from '../constructor-block';

import { selectBurger, setMainOrSauce } from '../../store/slices/burger-slice';
import getBackgroundColor from '../../utils/get-background-color';
import filterObject from '../../utils/filter-object';

import {
  MAIN, BUN, SAUCE, COLUMN,
} from '../../utils/constants';

import style from './constructor-blocks.module.css';

export default function ConstructorBlocks() {
  const dispatch = useDispatch();
  const burger = useSelector(selectBurger);
  const { mainOrSauce: items = [] } = burger;
  const [{ isOver, canDrop }, refMain] = useDrop({
    accept: [MAIN, SAUCE, BUN, COLUMN],
    drop: (c) => {
      dispatch(setMainOrSauce({ ...filterObject(c) }));

      return c;
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
      className={`${style.items} ${items.length === 0 && style.border}`}
      style={{ backgroundColor: getBackgroundColor(isOver, canDrop), border: getBorder() }}
      ref={refMain}
    >
      {items.length === 0
        ? <span className={getClass()}>+ ингредиент</span>
        : items.map((item, i) => (<ConstructorBlock key={i} {...item} index={i} />))}
    </ul>
  );
}
