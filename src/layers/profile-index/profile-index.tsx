/* eslint-disable max-len */
import React, { useEffect, useState, FormEvent } from 'react';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';
import { useToken } from '../../hooks/use-token';
import { useUpdateUserMutation, useRefreshTokenMutation } from '../../store';

import style from './profile-index.module.css';

type TypeResponseError = {
  error: {
    data: {
      message: string;
    }
  },
};

interface GenericObject {
  [key: string]: string | number,
}

export default function ProfileIndex() {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const [refreshToken, { isLoading: loading, isError: error }] = useRefreshTokenMutation();
  const userData = useUser()!;
  const getNewToken = useToken();
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  const [show, setShow] = useState(false);

  const {
    values, handleChange, resetForm,
  } = useFormWithValidation({
    name: userData?.name || '',
    email: userData?.email || '',
    password: '',
  });

  const onClickReset = () => {
    resetForm({
      name: userData?.name || '',
      email: userData?.email || '',
      password: '',
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response: unknown = await updateUser(values);

      if ((response as TypeResponseError)?.error?.data?.message === 'jwt expired') {
        await getNewToken();
        await updateUser(values);
      }
    } catch (err) {
      // need modal...
      console.log(err);
    }
  };
  // need form validation....

  useEffect(() => {
    let flag = false;

    Object.keys(values as GenericObject).forEach((key) => {
      if ((values[key] && (userData as GenericObject)[key]) && (values[key] !== (userData as GenericObject)[key])) {
        flag = true;
      }
    });

    setShow(flag);
  }, [handleChange]);

  return (isLoading
    ? <Preloader />
    : (
      <form className={style.main} onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Имя"
          onChange={handleChange}
          icon="EditIcon"
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
          icon="EditIcon"
          value={values.email || ''}
          name="email"
          error={false}
          errorText="Ошибка"
          size="default"
          extraClass="ml-1 mb-6"
        />
        <Input
          type="password"
          placeholder="Пароль"
          onChange={handleChange}
          icon="EditIcon"
          value={values.password || ''}
          name="password"
          error={false}
          errorText="Ошибка"
          size="default"
          extraClass="ml-1 mb-6"
        />
        <div className={style.footer}>
          {show && (
          <Button
            extraClass="mt-2"
            htmlType="button"
            type="primary"
            size="medium"
            onClick={onClickReset}
          >
            Отменить
          </Button>
          )}
          {show && (
          <Button
            extraClass="mt-4"
            htmlType="submit"
            type="primary"
            size="medium"
          >
            Сохранить
          </Button>
          )}
        </div>
      </form>
    ));
}
