/* eslint-disable react/forbid-prop-types */
import React from 'react';
import classNames from 'classnames';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './order-info.module.css';

type TypeOrder = {
  cards: TypeCard[];
  count: number;
  icons: TypeCard[];
  name: string;
  number: string;
  price: number;
  time: string;
};

export default function OrderInfo({ currentOrder: order }: { currentOrder: TypeOrder }) {
  console.log(order);
  return (
    <div className={classNames(style.container, 'pb-20')}>
      <span className="text text_type_digits-default mt-20">{`#${order?.number}`}</span>
      <h2 className={classNames('text text_type_main-medium mt-10 mb-3', style.title)}>{order.name}</h2>
      <span className={classNames('text text_type_main-default', style.status)}>Выполнен</span>
      <h2 className={classNames('text text_type_main-medium mt-15 mb-6', style.title)}>Состав:</h2>
      <ul className={style.cards}>
        {order.cards.map((x: TypeCard) => (
          <li key={x._id} className={style.card}>
            <img src={x.image} alt={x.name} className={style.icon} />
            <span className={classNames('text text_type_main-default ml-4', style.name)}>{x.name}</span>
            <div className={style.price}>
              <span className="text text_type_digits-default mr-2">{`1 x ${x.price}`}</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>
      <div className={style.footer}>
        <span className={classNames('text text_type_main-default text_color_inactive')}>{order.time}</span>
        <div className={style.price}>
          <span className="text text_type_digits-default mr-2">{order.price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
