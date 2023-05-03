import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import ConstructorBlock from '../constructor-block';

import getBackgroundColor from '../../utils/get-background-color';
import { cardPropTypes } from '../../utils/types';

import style from './constructor-blocks.module.css';

export default function ConstructorBlocks({ items, setItems }) {
  const [{ isOver, canDrop }, refMain] = useDrop({
    accept: ['main', 'sauce', 'bun', 'column'],
    drop: (c) => {
      setItems([{ ...c, id: items.length }, ...items]);

      return c;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: ({ type }) => type === 'main' || type === 'sauce',
  });

  const getBorder = () => (isOver ? '2px dashed honeydew' : '');

  return (
    <ul
      className={`${style.items} ${items.length === 0 && style.border}`}
      style={{ backgroundColor: getBackgroundColor(isOver, canDrop), border: getBorder() }}
      ref={refMain}
    >
      {items.length === 0
        ? (
          <span className={`${style.description} text text_type_main-small text_color_inactive`}>
            + ингредиент
          </span>
        )
        : items.map((item, i) => (
          <ConstructorBlock
            key={i}
            {...item}
            items={items}
            index={i}
            setItems={setItems}
          />
        ))}
    </ul>
  );
}

ConstructorBlocks.protoType = {
  items: PropTypes.arrayOf(cardPropTypes).isRequired,
  setItems: PropTypes.func.isRequired,
};
