import React from 'react';

import Order from '../order';

import style from './orders.module.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Orders({ title }: { title?: string }) {
  return (
    <section className={style.main}>
      {title && (<h2 className="text text_type_main-large mb-5">{title}</h2>)}
      <ul className={style.orders}>
        {arr.map((x) => (<Order key={x} />))}
      </ul>
    </section>
  );
}
