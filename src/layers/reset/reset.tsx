import React, { useState, useEffect, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../../components/preloader';

import { usePasswordResetMutation } from '../../store';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './reset.module.css';

export default function Reset() {
  const navigate = useNavigate();
  const userData = useUser();
  const [show, setShow] = useState(false);
  const [passwordReset, { isError, isLoading }] = usePasswordResetMutation();
  const {
    values, handleChange, errors, isValid, resetForm, setIsValid, setValues,
  } = useFormWithValidation({ password: '', token: '' });

  const toggleShow = () => setShow(!show);
  // for debug
  console.log(isError, isLoading, values);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await passwordReset(values);
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
      navigate(Urls.BASE);
    }
  }, []);
  // need form validation....

  return (
    isLoading
      ? <Preloader />
      : (
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
            <NavLink className="text text_type_main-default pl-2 ml-2" to={Urls.SIGN.IN}>
              Войти
            </NavLink>
          </span>
        </form>
      )
  );
}
