import React from 'react';

import Order from '../../components/order-info';

import withIngredient from '../../hocs/with-ingredient';

import style from './order-info.module.css';

function OrderInfo() {
  return (
    <div className={style.container}>
      <Order path="all" />
    </div>
  );
}

export default withIngredient(OrderInfo);
