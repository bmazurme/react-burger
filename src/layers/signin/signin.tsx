import React, { useState, useEffect, FormEvent } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

import { useSignInMutation } from '../../store/api/auth-api/endpoints';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './signin.module.css';

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

export default function Signin() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = useUser();
  const [show, setShow] = useState(false);
  const [signIn] = useSignInMutation();
  const { values, handleChange } = useFormWithValidation({ name: '', email: '', password: '' });

  const toggleShow = () => setShow(!show);
  // for debug
  // console.log(isError, isLoading, values);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res: unknown = await signIn(values);
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
  // need form validation....

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <h2 className="text text_type_main-large mb-6">Вход</h2>
      {inputs.map((input: TInputInterface & { name: string }) => (
        <Input {...input} key={input.name} />
      ))}
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
        <NavLink className="text text_type_main-default pl-2 ml-2" to={Urls.SIGN.UP}>
          Зарегистрироваться
        </NavLink>
      </span>
      <span className="text text_type_main-default pl-2 text_color_inactive">
        Забыли пароль?
        <NavLink className="text text_type_main-default pl-2 ml-2" to={Urls.FORGOT}>
          Восстановить пароль
        </NavLink>
      </span>
    </form>
  );
}
