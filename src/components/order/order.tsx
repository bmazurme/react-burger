/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { RANGE } from '../../mocks/order';
import { getFormatedTime } from '../../utils';

import style from './order.module.css';

export default function Order({ path, detail, ingredients }
  : { path?: boolean, detail: TOrder, ingredients: TypeCard[] }) {
  const { pathname } = useLocation();
  const ingredient = (x: string) => ingredients.find((c) => c._id === x);
  const time = getFormatedTime(detail.createdAt);

  const price = useMemo(() => detail.ingredients
    .map((x) => (ingredients.find((c) => x === c._id)))
    .reduce((x, r) => x += r?.price || 0, 0), [detail.number]);

  return (
    <Link to={path ? `${detail.number}` : `/feed/${detail.number}`} state={{ pathname }} className={style.link}>
      <li className={style.order}>
        <div className={style.header}>
          <span className="text text_type_digits-default">{`#${detail.number}`}</span>
          <span className="text text_type_main-default text_color_inactive">
            {time}
          </span>
        </div>
        <h2 className="text text_type_main-medium mt-6 mb-3">{detail.name}</h2>
        {path
          && (
          <span className={classNames(
            'text text_type_main-default',
            style.status,
            { [style.done]: detail.status === 'done' },
            { [style.canceled]: detail.status !== 'pending' && detail.status !== 'done' },
          )}
          >
            {detail.status === 'done' ? 'Выполнен' : detail.status === 'pending' ? 'Готовится' : 'Отменён'}
          </span>
          )}
        <div className={style.footer}>
          <ul className={style.icons}>
            {detail.ingredients.slice(0, RANGE).map((x, i) => (
              <li
                key={i}
                className={i < RANGE - 1 ? style.item : style.item_last}
                style={{ left: `${i * 50}px`, zIndex: 100 - i }}
              >
                <img className={style.icon} src={ingredient(x)?.image} alt={ingredient(x)?.name} />
                {(detail.ingredients.length > 0
                && i === RANGE - 1 && detail.ingredients.length - RANGE > 0)
                && (
                <span className={classNames(style.counter, 'text text_type_main-small')}>
                  {`+${detail.ingredients.length - RANGE}`}
                </span>
                )}
              </li>
            ))}
          </ul>
          <div className={style.price}>
            <span className="text text_type_digits-default mr-2">{price}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
}
