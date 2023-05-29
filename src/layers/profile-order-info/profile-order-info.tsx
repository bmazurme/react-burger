import React from 'react';

import OrderInfo from '../../components/order-info';

import withIngredient from '../../hocs/with-ingredient';

import style from './profile-order-info.module.css';

function ProfileOrderInfo() {
  return (
    <div className={style.container}>
      <OrderInfo path="user" />
    </div>
  );
}

export default withIngredient(ProfileOrderInfo);
