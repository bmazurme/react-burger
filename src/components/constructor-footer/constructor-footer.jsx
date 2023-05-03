import React from 'react';
import PropTypes from 'prop-types';

import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './constructor-footer.module.css';

export default function ConstructorFooter({ openPopup, sum }) {
  return (
    <div className={style.footer}>
      <div className={`${style.price} pt-1 pb-2`}>
        <p className="text text_type_digits-medium pr-2">{sum}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="medium" onClick={openPopup}>
        Оформить заказ
      </Button>
    </div>
  );
}

ConstructorFooter.protoType = {
  openPopup: PropTypes.func.isRequired,
  sum: PropTypes.number.isRequired,
};
