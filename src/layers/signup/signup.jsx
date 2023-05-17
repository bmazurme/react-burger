import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSignUpMutation } from '../../store';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './signup.module.css';

export default function Signup() {
  const navigate = useNavigate();
  const userData = useUser();
  const [show, setShow] = useState(false);
  const [signUp, { isError, isLoading }] = useSignUpMutation();
  const {
    values, handleChange, errors, isValid, resetForm, setIsValid, setValues,
  } = useFormWithValidation({ name: '', email: '', password: '' });

  const toggleShow = () => setShow(!show);
  // for debug
  // console.log(isError, isLoading, values);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signUp(values);
      // for debug
      console.log(result);
      navigate(Urls.SIGN.IN);
    } catch (err) {
      // need modal...
      console.log(err);
    }
  };

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });
  // need form validation....

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <h2 className="text text_type_main-large mb-6">Регистрация</h2>
      <Input
        type="text"
        placeholder="Имя"
        onChange={handleChange}
        value={values.name || ''}
        name="name"
        error={false}
        errorText="Ошибка"
        size="default"
        extraClass="ml-1 mb-6"
      />
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
        Зарегистрироваться
      </Button>
      <span className="text text_type_main-default pl-2 mb-4 text_color_inactive">
        Уже зарегистрированы?
        <NavLink
          to={Urls.SIGN.IN}
          className="text text_type_main-default pl-2 ml-2"
        >
          Войти
        </NavLink>
      </span>
    </form>
  );
}
