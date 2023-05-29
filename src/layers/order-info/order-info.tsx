import React from 'react';

import Order from '../../components/order-info';

import style from './order-info.module.css';

export default function OrderInfo() {
  return (
    <div className={style.container}>
      <Order />
    </div>
  );
}
