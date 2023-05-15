import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSignInMutation } from '../../store/api/auth-api/endpoints';
import useFormWithValidation from '../../hooks/use-form-with-validation';

import { Urls } from '../../utils';

import style from './signin.module.css';

export default function Signin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [signIn, { isError, isLoading }] = useSignInMutation();
  const {
    values, handleChange, errors, isValid, resetForm, setIsValid, setValues,
  } = useFormWithValidation({ name: '', email: '', password: '' });

  const toggleShow = () => setShow(!show);
  // for debug
  console.log(isError, isLoading, values);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(values);
      const result = await signIn(values);
      navigate(Urls.PROFILE.INDEX);
      console.log(result);
    } catch (err) {
      // need modal...
      console.log(err);
    }
  };

  // need form validation....

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <h2 className="text text_type_main-large mb-6">Вход</h2>
      <Input
        type="text"
        placeholder="E-mail"
        onChange={handleChange}
        value={values.email || ''}
        name="email"
        error={false}
        errorText="Ошибка"
        size="default"
        extraClass="ml-1 mb-6"
      />
      <Input
        type={show ? 'text' : 'password'}
        placeholder="Пароль"
        onChange={handleChange}
        icon={show ? 'HideIcon' : 'ShowIcon'}
        value={values.password || ''}
        name="password"
        error={false}
        onIconClick={toggleShow}
        errorText="Ошибка"
        size="default"
        extraClass="ml-1 mb-6"
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        extraClass="mb-20"
      >
        Войти
      </Button>
      <span className="text text_type_main-default pl-2 mb-4 text_color_inactive">
        Вы — новый пользователь?
        <NavLink to={Urls.SIGN.UP}>Зарегистрироваться</NavLink>
      </span>
      <span className="text text_type_main-default pl-2 text_color_inactive">
        Забыли пароль?
        <NavLink to={Urls.FORGOT}>Восстановить пароль</NavLink>
      </span>
    </form>
  );
}
