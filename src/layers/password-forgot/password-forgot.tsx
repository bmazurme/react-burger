import React, { FormEvent, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../../components/preloader';

import { usePasswordForgotMutation } from '../../store';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './password-forgot.module.css';

export default function PasswordForgot() {
  const navigate = useNavigate();
  const userData = useUser();
  const [passwordForgot, { isError, isLoading }] = usePasswordForgotMutation();
  const { values, handleChange } = useFormWithValidation({ email: '' });
  // for debug
  console.log(isError, isLoading, values);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await passwordForgot(values);
      // for debug
      console.log(result);
      navigate(Urls.RESET);
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
            <NavLink className="text text_type_main-default pl-2 ml-2" to={Urls.SIGN.IN}>
              Войти
            </NavLink>
          </span>
        </form>
      )
  );
}
