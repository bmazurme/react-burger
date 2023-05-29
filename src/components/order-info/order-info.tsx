/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import classNames from 'classnames';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../preloader';

import { useAppSelector } from '../../hooks';
import { useGetMessagesQuery, useGetIngredientsMutation } from '../../store/api';
import { selectOrders, selectIngredient } from '../../store/slices';

import { getFormatedTime } from '../../utils';

import style from './order-info.module.css';

export default function OrderInfo() {
  const { id } = useParams();
  const { data = [] } = useGetMessagesQuery('redux');
  const { orders } = useAppSelector(selectOrders) as unknown as { orders: TOrder[] };
  const [getIngredients, { isLoading }] = useGetIngredientsMutation();

  const ingredients: TypeCard[] = useAppSelector(selectIngredient)!;
  console.log(234, id, orders);
  const orderRaw = orders?.find((x: TOrder) => x.number.toString() === id);
  console.log(123, id, orderRaw);

  const order: TMOrder = {
    ...orderRaw!,
    ingredients: orderRaw?.ingredients?.map((x) => (ingredients?.find((c) => x === c._id))) as TypeCard[],
    price: (orderRaw?.ingredients?.map((x) => (ingredients?.find((c) => x === c._id))) as TypeCard[])?.reduce((x, r) => x += r.price, 0),
    time: orderRaw?.createdAt as string,
  };

  const arr = [...new Set(order.ingredients)].map((x) => ({ ...x, count: order.ingredients.filter((c) => c._id === x._id).length }));
  console.log(arr);

  useEffect(() => {
    const getCards = async () => {
      await getIngredients() as { data: { data: TypeCard[] } };
    };

    if (ingredients.length < 1) {
      getCards();
    }
  }, []);

  // const ordersData = useAppSelector(selectOrders);
  // const { orders = [] } = ordersData!;

  // useEffect(() => {
  //   const getCards = async () => {
  //     await getIngredients() as { data: { data: TypeCard[] } };
  //   };

  //   if (ingredients.length < 1) {
  //     getCards();
  //   }
  // }, []);

  return (
    !order
      ? <Preloader />
      : (
        <div className={classNames(style.container, 'pb-20')}>
          <span className="text text_type_digits-default mt-20">{`#${order?.number}`}</span>
          <h2 className={classNames('text text_type_main-medium mt-10 mb-3', style.title)}>{order?.name}</h2>
          <span className={classNames('text text_type_main-default', style.status)}>Выполнен</span>
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
      )
  );
}
