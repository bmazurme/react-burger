import React, { useState, useRef } from 'react';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';

import style from './profile.module.css';

export default function Profile() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  const { data = { data: [] }, error, isLoading } = useGetIngredientsQuery();

  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  return (isLoading
    ? <Preloader />
    : (
      <div className={style.container}>
        <h2 className="text text_type_main-large mb-6">Профиль</h2>
        <Input
          type="text"
          placeholder="Имя"
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
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете
        </p>
        <p className="text text_type_main-default text_color_inactive">
          изменить свои персональные данные
        </p>
      </div>
    ));
}
