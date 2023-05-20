import React from 'react';
import classNames from 'classnames';

import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { selectBurger } from '../../store/slices/burger-slice';
import { useAppSelector } from '../../hooks';

import style from './constructor-footer.module.css';

export default function ConstructorFooter({ onClick }: { onClick: () => void }) {
  const { price = 0, bun, mainOrSauce } = useAppSelector(selectBurger);
  const disabled = [bun, ...mainOrSauce].filter((x) => x?._id).map((x) => x?._id).length === 0;

  return (
    <div className={style.footer}>
      <div className={classNames(style.price, 'pt-1 pb-2')}>
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
