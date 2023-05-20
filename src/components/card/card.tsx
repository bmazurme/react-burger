import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useAppSelector } from '../../hooks';
import { selectBurger } from '../../store/slices/burger-slice';

import style from './card.module.css';

export default function Card(card: TypeCard) {
  const {
    _id, image, name, price, type,
  } = card;

  const location = useLocation();
  const { bun = null, mainOrSauce = [] } = useAppSelector(selectBurger);
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
          className={style.image}
          src={image}
          alt={name}
          loading="lazy"
        />
        <div className={classNames(style.price, 'pt-1 pb-2')}>
          <p className="text text_type_digits-default pr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={classNames('text text_type_main-default pb-10', style.name)}>{name}</p>
        {count > 0 && <Counter count={count} size="default" />}
      </Link>
    </li>
  );
}
