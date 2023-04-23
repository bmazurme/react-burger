import React from 'react';
import PropTypes from 'prop-types';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './card.module.css';

export default function Card({ card }) {
  return (
    <li key={card._id} className={`${style.card} pl-4`}>
      <img className={`${style.image}`} src={card.image} alt={card.name} />
      <div className={`${style.price} pt-1 pb-2`}>
        <p className='text text_type_digits-default pr-2'>{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${style.name} text text_type_main-default pb-10`}>{card.name}</p>
      <Counter count={1} size="default" />
    </li>
  );
}

const cardPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

Card.protoType = {
	card: cardPropTypes.isRequired
}
