import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { selectBurger } from '../../store/slices/burger-slice';

import { usePostOrderMutation } from '../../store/api/order-api/endpoints';

import style from './constructor-footer.module.css';

export default function ConstructorFooter({ openPopup }) {
  const { price = 0 } = useSelector(selectBurger);
  const [postOrder] = usePostOrderMutation();

  const onClick = async () => {
    const data = { 
      "ingredients": ["643d69a5c3f7b9001cfa093c"]
    };
    openPopup();
    await postOrder(data);
  };

  return (
    <div className={style.footer}>
      <div className={`${style.price} pt-1 pb-2`}>
        <p className="text text_type_digits-medium pr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
        Оформить заказ
      </Button>
    </div>
  );
}

ConstructorFooter.protoType = {
  openPopup: PropTypes.func.isRequired,
};
