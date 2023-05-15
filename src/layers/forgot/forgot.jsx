import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { usePasswordForgotMutation } from '../../store/api/password-api/endpoints';
import useFormWithValidation from '../../hooks/use-form-with-validation';

import { Urls } from '../../utils';

import style from './forgot.module.css';

export default function Forgot() {
  const navigate = useNavigate();
  const [passwordForgot, { isError, isLoading }] = usePasswordForgotMutation();
  const {
    values, handleChange, errors, isValid, resetForm, setIsValid, setValues,
  } = useFormWithValidation({ email: '' });

  // for debug
  console.log(isError, isLoading, values);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await passwordForgot(values);
      navigate(Urls.RESET);
      console.log(result);
    } catch (err) {
      // need modal...
      console.log(err);
    }
  };

  // need form validation....

  return (
    <form className={style.container} onSubmit={onSubmit}>
      <h2 className="text text_type_main-large mb-6">Восстановление пароля</h2>
      <Input
        type="text"
        placeholder="Укажите e-mail"
        onChange={handleChange}
        value={values.email || ''}
        name="email"
        error={false}
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
        Восстановить
      </Button>

      <span className="text text_type_main-default pl-2 text_color_inactive">
        Вспомнили пароль?
        <NavLink to={Urls.SIGN.IN}>Войти</NavLink>
      </span>
    </form>
  );
}
