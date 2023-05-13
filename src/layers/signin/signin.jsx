import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';
import { Urls } from '../../utils';

import style from './signin.module.css';

export default function Signin() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  const { data = { data: [] }, error, isLoading } = useGetIngredientsQuery();
  const { data: rawData } = data;
  const cards = rawData.map((x) => ({ ...x, thumbnail: x.image, text: x.name }));

  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  return (
    <div className={style.container}>
      <h2 className="text text_type_main-large mb-6">Вход</h2>
      <Input
        type="text"
        placeholder="E-mail"
        onChange={(e) => setValue(e.target.value)}
        // icon={'CurrencyIcon'}
        value={value}
        name="name"
        error={false}
        ref={inputRef}
        onIconClick={onIconClick}
        errorText="Ошибка"
        size="default"
        extraClass="ml-1 mb-6"
      />
      <Input
        type="text"
        placeholder="Пароль"
        onChange={(e) => setValue(e.target.value)}
        icon="ShowIcon"
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
        Войти
      </Button>
      <span className="text text_type_main-default pl-2 mb-4 text_color_inactive">
        Вы — новый пользователь?
        {' '}
        <NavLink to={Urls.SIGN.UP}>Зарегистрироваться</NavLink>
      </span>
      <span className="text text_type_main-default pl-2 text_color_inactive">
        Забыли пароль?
        {' '}
        <NavLink to={Urls.FORGOT}>Восстановить пароль</NavLink>
      </span>
    </div>
  );
}
