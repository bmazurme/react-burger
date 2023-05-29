import React, { useEffect } from 'react';

import Order from '../order';
import Preloader from '../preloader';

import { useAppSelector } from '../../hooks';
import { useGetOrdersQuery, useGetIngredientsMutation } from '../../store';
import { selectIngredient, selectOrders } from '../../store/slices';

import style from './orders.module.css';

export default function Orders({ title, path }: { title?: string, path?: boolean }) {
  const ingredients = useAppSelector(selectIngredient);
  const [getIngredients, { isLoading }] = useGetIngredientsMutation();
  const { data = [] } = useGetOrdersQuery(path ? 'user' : 'all');
  const ordersData = useAppSelector(selectOrders);
  const { orders = [] } = ordersData!;

  useEffect(() => {
    const getCards = async () => {
      await getIngredients();
    };

    if (ingredients.length < 1) {
      getCards();
    }
  }, []);

  return (
    isLoading
      ? <Preloader />
      : (
        <section className={style.main}>
          {title && (<h2 className="text text_type_main-large mb-5">{title}</h2>)}
          <ul className={style.orders}>
            {orders.map((x: TOrder) => (
              <Order
                key={x._id}
                path={path}
                detail={x}
                ingredients={ingredients}
              />
            ))}
          </ul>
        </section>
      )
  );
}
