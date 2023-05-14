import React, { useState, useRef } from 'react';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';

import style from './profile-index.module.css';

export default function ProfileIndex() {
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
      <div className={style.main}>
        <Input
          type="text"
          placeholder="Имя"
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
        <Input
          type="text"
          placeholder="E-mail"
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
      </div>
    ));
}
