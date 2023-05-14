import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import style from './sidebar.module.css';

const links = [
  { id: uuidv4(), name: 'Профиль', to: '' },
  { id: uuidv4(), name: 'История заказов', to: 'orders' },
  { id: uuidv4(), name: 'Выход', to: 'signout' },
];

export default function Profile() {
  const getStyle = ({ isActive }) => (classNames('text text_type_main-medium mb-6', style.link, { [style.link_active]: isActive }));

  return (
    <div className={style.sidebar}>
      {links.map(({ id, name, to }) => (
        <NavLink key={id} to={to} end className={getStyle}>
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
  );
}
