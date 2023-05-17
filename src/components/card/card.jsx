/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { selectBurger } from '../../store/slices/burger-slice';
import { cardPropTypes } from '../../utils';

import style from './card.module.css';

export default function Card(card) {
  const {
    _id, image, name, price, type,
  } = card;

  const location = useLocation();
  const { bun = null, mainOrSauce = [] } = useSelector(selectBurger);
  const count = [bun, ...mainOrSauce].filter((x) => x?._id === _id).length;

  const [{ opacity }, dragRef] = useDrag(() => ({
    type,
    item: card,
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.5 : 1 }),
  }));

  return (
    <li ref={dragRef} style={{ opacity }} className={classNames(style.card, 'pl-4')}>
      <Link to={`/ingredients/${_id}`} state={{ pathname: location.pathname }} className={style.link}>
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
        <p className={classNames('text text_type_main-default pb-10', style.name)}>{name}</p>
        {count > 0 && <Counter count={count} size="default" />}
      </Link>
    </li>
  );
}

Card.propTypes = {
  card: PropTypes.shape(cardPropTypes),
};
