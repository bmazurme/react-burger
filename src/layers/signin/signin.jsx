import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSignInMutation } from '../../store';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './signin.module.css';

export default function Signin() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = useUser();
  const [show, setShow] = useState(false);
  const [signIn, { isError, isLoading }] = useSignInMutation();
  const {
    values, handleChange, errors, isValid, resetForm, setIsValid, setValues,
  } = useFormWithValidation({ name: '', email: '', password: '' });

  const toggleShow = () => setShow(!show);
  // for debug
  // console.log(isError, isLoading, values);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn(values);
      console.log('error message', res?.error?.data?.message);
      const { data } = res;
      const { accessToken, refreshToken } = data;

      if (accessToken && refreshToken) {
        localStorage.setItem('accessToken', accessToken.split(' ')[1]);
        localStorage.setItem('refreshToken', refreshToken);
        navigate(location?.state?.from || Urls.BASE);
      }
    } catch (err) {
      // need modal...
      console.log(err);
    }
  };

  console.log(location?.state?.from);
  useEffect(() => {
    if (userData) {
      navigate(Urls.BASE);
    }
  }, []);
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
        <NavLink
          className="text text_type_main-default pl-2 ml-2"
          to={Urls.SIGN.UP}
        >
          Зарегистрироваться
        </NavLink>
      </span>
      <span className="text text_type_main-default pl-2 text_color_inactive">
        Забыли пароль?
        <NavLink
          className="text text_type_main-default pl-2 ml-2"
          to={Urls.FORGOT}
        >
          Восстановить пароль
        </NavLink>
      </span>
    </form>
  );
}
