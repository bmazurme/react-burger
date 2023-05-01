/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { cardPropTypes } from '../../utils/types';

import style from './card.module.css';

export default function Card(card) {
  const {
    _id,
    image,
    name,
    price,
    onClickIngredient,
  } = card;
  const [count, setCounter] = useState(0);
  const onClick = () => {
    setCounter(count + 1);
    onClickIngredient(card);
  };

  const [{ opacity }, dragRef] = useDrag(() => ({
    type: 'card',
    item: card,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <li
      ref={dragRef}
      style={{ opacity }}
      key={_id}
      className={`${style.card} pl-4`}
      onClick={onClick}
    >
      <img
        className={`${style.image}`}
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className={`${style.price} pt-1 pb-2`}>
        <p className="text text_type_digits-default pr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${style.name} text text_type_main-default pb-10`}>
        {name}
      </p>
      {count > 0 && <Counter count={count} size="default" />}
    </li>
  );
}

Card.protoType = {
  card: cardPropTypes.isRequired,
};
