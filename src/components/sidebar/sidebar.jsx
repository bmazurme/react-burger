import React from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import style from './sidebar.module.css';

export default function Profile() {
  return (
    <div className={style.sidebar}>
      <NavLink
        to=""
        end
        className={({ isActive }) => (classNames('text text_type_main-medium mb-6', style.link, { [style.link_active]: isActive }))}
      >
        Профиль
      </NavLink>
      <NavLink
        to="orders"
        className={({ isActive }) => (classNames('text text_type_main-medium mb-6', style.link, { [style.link_active]: isActive }))}
      >
        История заказов
      </NavLink>
      <NavLink
        to="signout"
        className={({ isActive }) => (classNames('text text_type_main-medium mb-6', style.link, { [style.link_active]: isActive }))}
      >
        Выход
      </NavLink>

      <p className="text text_type_main-default text_color_inactive mt-20">
        В этом разделе вы можете
      </p>
      <p className="text text_type_main-default text_color_inactive">
        изменить свои персональные данные
      </p>
    </div>
  );
}
