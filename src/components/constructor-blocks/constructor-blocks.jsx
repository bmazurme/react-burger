import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';

import { BurgerContext } from '../../context/burger-context';
import ConstructorBlock from '../constructor-block';
import getBackgroundColor from '../../utils/get-background-color';
import filterObject from '../../utils/filter-object';

import style from './constructor-blocks.module.css';

export default function ConstructorBlocks() {
  const { burger, setBurger } = useContext(BurgerContext);
  const { mainOrSauce: items = [] } = burger;
  const [{ isOver, canDrop }, refMain] = useDrop({
    accept: ['main', 'sauce', 'bun', 'column'],
    drop: (c) => {
      setBurger({
        ...burger,
        mainOrSauce: [filterObject(c), ...items].map((x, i) => ({ ...x, index: i }))
      });

      return c;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: ({ type }) => type === 'main' || type === 'sauce',
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
