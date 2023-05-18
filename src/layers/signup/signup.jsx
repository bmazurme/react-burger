import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSignUpMutation } from '../../store';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './signup.module.css';

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
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
      const res = await signUp(values);
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

  const inputs = [
    {
      type: 'text', placeholder: 'Имя', value: values.name || '', name: 'name',
    },
    {
      type: 'text', placeholder: 'E-mail', value: values.email || '', name: 'email',
    },
    {
      type: show ? 'text' : 'password',
      placeholder: 'Пароль',
      value: values.password || '',
      name: 'password',
      onIconClick: toggleShow,
      icon: show ? 'HideIcon' : 'ShowIcon',
    },
  ];
  const common = {
    onChange: handleChange,
    error: false,
    errorText: 'Ошибка',
    size: 'default',
    extraClass: 'ml-1 mb-6',
  };

  useEffect(() => {
    if (userData) {
      navigate(Urls.BASE);
    }
  }, []);
  // need form validation....

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <h2 className="text text_type_main-large mb-6">Регистрация</h2>
      {inputs.map((input) => (<Input {...input} {...common} key={input.name} />))}
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
        <NavLink to={Urls.SIGN.IN} className="text text_type_main-default pl-2 ml-2">
          Войти
        </NavLink>
      </span>
    </form>
  );
}
