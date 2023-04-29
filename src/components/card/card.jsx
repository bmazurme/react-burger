/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { cardPropTypes } from '../../utils/types';

import style from './card.module.css';

export default function Card(card) {
  return (
    <li key={card._id} className={`${style.card} pl-4`} onClick={() => card.onClickIngredient(card)}>
      <img
        className={`${style.image}`}
        src={card.image}
        alt={card.name}
        loading="lazy"
      />
      <div className={`${style.price} pt-1 pb-2`}>
        <p className="text text_type_digits-default pr-2">{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${style.name} text text_type_main-default pb-10`}>
        {card.name}
      </p>
      <Counter count={1} size="default" />
    </li>
  );
}

Card.protoType = {
  card: cardPropTypes.isRequired,
};
