import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { usePasswordResetMutation } from '../../store/api/password-api/endpoints';
import useFormWithValidation from '../../hooks/use-form-with-validation';

import { Urls } from '../../utils';

import style from './reset.module.css';

export default function Reset() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [passwordReset, { isError, isLoading }] = usePasswordResetMutation();
  const {
    values, handleChange, errors, isValid, resetForm, setIsValid, setValues,
  } = useFormWithValidation({ password: '', token: '' });

  const toggleShow = () => setShow(!show);
  // for debug
  console.log(isError, isLoading, values);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(values);
      const result = await passwordReset(values);
      navigate(Urls.SIGN.IN);
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
        type={show ? 'text' : 'password'}
        placeholder="Введите новый пароль"
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
      <Input
        type="text"
        placeholder="Введите код из письма"
        onChange={handleChange}
        value={values.token || ''}
        name="token"
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
        <NavLink to={Urls.SIGN.IN}>Сохранить</NavLink>
      </span>
    </form>
  );
}
