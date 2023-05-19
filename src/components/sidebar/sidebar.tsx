import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import Preloader from '../preloader';

import { useSignOutMutation } from '../../store';
import { logOut } from '../../store/slices/user-slice';
import { Urls } from '../../utils';

import style from './sidebar.module.css';

export default function Profile() {
  const dispatch = useDispatch();
  const [signOut, { isError, isLoading }] = useSignOutMutation();
  const getStyle = ({ isActive }: { isActive: boolean}) => (classNames('text text_type_main-medium mb-6', style.link, { [style.link_active]: isActive }));
  const logout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await signOut(refreshToken);
      dispatch(logOut());
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessToken');
    } catch (e) {
      // need modal...
      console.log(e);
    }
  };

  const links = [
    { id: uuidv4(), name: 'Профиль', to: '' },
    { id: uuidv4(), name: 'История заказов', to: 'orders' },
    {
      id: uuidv4(), name: 'Выход', to: Urls.SIGN.IN, handler: logout,
    },
  ];

  return (
    isLoading
      ? <Preloader />
      : (
        <div className={style.sidebar}>
          {links.map(({
            id, name, to, handler,
          }) => (
            <NavLink key={id} to={to} end className={getStyle} onClick={handler}>
              {name}
            </NavLink>
          ))}

          <p className="text text_type_main-default text_color_inactive mt-20">
            В этом разделе вы можете
          </p>
          <p className="text text_type_main-default text_color_inactive">
            изменить свои персональные данные
          </p>
        </div>
      )
  );
}
