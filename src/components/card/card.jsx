/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { selectBurger } from '../../store/slices/burger-slice';
import { cardPropTypes } from '../../utils';

import style from './card.module.css';

export default function Card(card) {
  const {
    _id,
    image,
    name,
    price,
    type,
    onClick,
  } = card;

  const { bun = null, mainOrSauce = [] } = useSelector(selectBurger);
  const onClickCard = () => onClick(card);
  const count = [bun, ...mainOrSauce].filter((x) => x?._id === _id).length;

  const [{ opacity }, dragRef] = useDrag(() => ({
    type,
    item: card,
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.5 : 1 }),
  }));

  return (
    <li
      ref={dragRef}
      style={{ opacity }}
      className={`${style.card} pl-4`}
      onClick={onClickCard}
    >
      <img
        className={`${style.image}`}
        src={image}
        alt={name}
        // loading="lazy"
      />
      <div className={`${style.price} pt-1 pb-2`}>
        <p className="text text_type_digits-default pr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${style.name} text text_type_main-default pb-10`}>{name}</p>
      {count > 0 && <Counter count={count} size="default" />}
    </li>
  );
}

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
