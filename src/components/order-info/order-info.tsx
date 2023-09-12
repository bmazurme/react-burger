/* eslint-disable no-nested-ternary */
import React from 'react';
import { useParams } from 'react-router';
import classNames from 'classnames';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useAppSelector, useIngredient } from '../../hooks';
import { useGetOrdersQuery } from '../../store';
import { selectOrders } from '../../store/slices';

import { getFormatedTime } from '../../utils';

import style from './order-info.module.css';

export default function OrderInfo({ path }: { path: 'user' | 'all' }) {
  const { id } = useParams();
  const { data = [] } = useGetOrdersQuery(path);
  const ingredientsCommon = useIngredient();
  const { orders } = useAppSelector(selectOrders) as unknown as { orders: TOrder[] };
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const orderRaw = orders?.find((x: TOrder) => x.number.toString() === id)!;
  // eslint-disable-next-line max-len
  const ingredients = orderRaw?.ingredients?.map((x) => (ingredientsCommon?.find((c) => x === c._id))) as TypeCard[];

  const order: TMOrder = {
    ...orderRaw,
    ingredients,
    price: ingredients?.reduce((x, r) => x + r!.price, 0),
    time: orderRaw?.createdAt as string,
  };

  const arr = [...new Set(ingredients)]
    .map((x: TypeCard) => ({
      ...x,
      count: order.ingredients.filter((c: TypeCard) => c._id === x._id).length,
    }));

  return (
    <div className={classNames(style.container, 'pb-20')}>
      <span className="text text_type_digits-default mt-20">{`#${order?.number}`}</span>
      <h2 className={classNames('text text_type_main-medium mt-10 mb-3', style.title)}>{order?.name}</h2>
      <span className={classNames(
        'text text_type_main-default',
        style.status,
        { [style.done]: order.status === 'done' },
        { [style.canceled]: order.status !== 'pending' && order.status !== 'done' },
      )}
      >
        {order.status === 'done' ? 'Выполнен' : order.status === 'pending' ? 'Готовится' : 'Отменён'}
      </span>
      <h2 className={classNames('text text_type_main-medium mt-15 mb-6', style.title)}>Состав:</h2>
      <ul className={style.cards}>
        {arr?.map((x: TypeCard & { count: number }, i: number) => (
          <li key={i} className={style.card}>
            <img src={x.image} alt={x.name} className={style.icon} />
            <span className={classNames('text text_type_main-default ml-4', style.name)}>{x.name}</span>
            <div className={style.price}>
              <span className="text text_type_digits-default mr-2">{`${x.count} x ${x.price}`}</span>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>
      <div className={style.footer}>
        <span className={classNames('text text_type_main-default text_color_inactive')}>
          {getFormatedTime(order?.time)}
        </span>
        <div className={style.price}>
          <span className="text text_type_digits-default mr-2">{order?.price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}
