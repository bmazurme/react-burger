/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { selectBurger } from '../../store/slices/burger-slice';

import style from './constructor-footer.module.css';

export default function ConstructorFooter({ onClick }) {
  const { price = 0, bun, mainOrSauce } = useSelector(selectBurger);
  const disabled = [bun, ...mainOrSauce].filter((x) => x?._id).map((x) => x?._id).length === 0;

  return (
    <div className={style.footer}>
      <div className={`${style.price} pt-1 pb-2`}>
        <p className="text text_type_digits-medium pr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={onClick}
        disabled={disabled}
      >
        Оформить заказ
      </Button>
    </div>
  );
}

ConstructorFooter.propTypes = {
  onClick: PropTypes.func.isRequired,
};
