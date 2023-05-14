import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { Urls } from '../../utils';

import style from './forgot.module.css';

export default function Forgot() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  return (
    <div className={style.container}>
      <h2 className="text text_type_main-large mb-6">Восстановление пароля</h2>
      <Input
        type="text"
        placeholder="Укажите e-mail"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name="name"
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText="Ошибка"
        size="default"
        extraClass="ml-1 mb-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass="mb-20"
      >
        Восстановить
      </Button>

      <span className="text text_type_main-default pl-2 text_color_inactive">
        Вспомнили пароль?
        {' '}
        <NavLink to={Urls.SIGN.IN}>Войти</NavLink>
      </span>
    </div>
  );
}
