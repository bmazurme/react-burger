import React from 'react';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './card.module.css';
import { cardPropTypes } from '../../utils/types';

export default function Card(card) {
  return (
    <li key={card._id} className={`${style.card} pl-4`}>
      <img className={`${style.image}`} src={card.image} alt={card.name} />
      <div className={`${style.price} pt-1 pb-2`}>
        <p className='text text_type_digits-default pr-2'>{card.price}</p>
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
	card: cardPropTypes.isRequired
}
