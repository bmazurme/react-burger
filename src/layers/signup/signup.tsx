/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, FormEvent } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

import { useSignUpMutation } from '../../store';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './signup.module.css';

type TInputInterface = {
  value: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  icon?: keyof TICons;
  errorText?: string;
  size?: 'default' | 'small';
  extraClass?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
  onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
}

type TypeResponse = { data: { accessToken: string, refreshToken: string } };

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useUser();
  const [show, setShow] = useState(false);
  const [signUp, { isError, isLoading }] = useSignUpMutation();
  const { values, handleChange } = useFormWithValidation({ name: '', email: '', password: '' });
  const toggleShow = () => setShow(!show);
  // for debug
  // console.log(isError, isLoading, values);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res: unknown = await signUp(values);
      const { data } = res as TypeResponse;
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

  const inputs: (TInputInterface & { name: string })[] = [
    {
      type: 'text',
      placeholder: 'Имя',
      value: values.name || '',
      name: 'name',
      onChange: handleChange,
      error: false,
      errorText: 'Ошибка',
      size: 'default',
      extraClass: 'ml-1 mb-6',
    },
    {
      type: 'text',
      placeholder: 'E-mail',
      value: values.email || '',
      name: 'email',
      onChange: handleChange,
      error: false,
      errorText: 'Ошибка',
      size: 'default',
      extraClass: 'ml-1 mb-6',
    },
    {
      type: show ? 'text' : 'password',
      placeholder: 'Пароль',
      value: values.password || '',
      name: 'password',
      onIconClick: toggleShow,
      icon: show ? 'HideIcon' : 'ShowIcon',
      onChange: handleChange,
      error: false,
      errorText: 'Ошибка',
      size: 'default',
      extraClass: 'ml-1 mb-6',
    },
  ];

  useEffect(() => {
    if (userData) {
      navigate(Urls.BASE);
    }
  }, []);

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <h2 className="text text_type_main-large mb-6">Регистрация</h2>
      {inputs.map((input: TInputInterface & { name: string }) => (
        <Input {...input} key={input.name} />
      ))}
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
