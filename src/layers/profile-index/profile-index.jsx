import React from 'react';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import useFormWithValidation from '../../hooks/use-form-with-validation';
import useUser from '../../hooks/use-user';
import { useUpdateUserMutation } from '../../store';

import style from './profile-index.module.css';

export default function ProfileIndex() {
  const [updateUser, { isLoading, isError, data }] = useUpdateUserMutation();
  const userData = useUser();
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;

  const {
    values, handleChange, errors, isValid, resetForm, setIsValid, setValues,
  } = useFormWithValidation({
    name: userData?.name || '',
    email: userData?.email || '',
    password: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateUser(values);
    } catch (err) {
      // need modal...
      console.log(err);
    }
  };
  // need form validation....

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
          onIconClick={onSubmit}
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
          onIconClick={onSubmit}
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
          onIconClick={onSubmit}
          errorText="Ошибка"
          size="default"
          extraClass="ml-1 mb-6"
        />
      </form>
    ));
}
