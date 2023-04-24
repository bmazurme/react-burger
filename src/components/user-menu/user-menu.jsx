import React from 'react';

import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './user-menu.module.css';

export default function UserMenu() {
  return (
    <nav className={style.nav}>
      <ul className={style.menu_user}>
        <li className={`${style.item} pl-5 pr-5 pb-4 pt-4`}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default pl-2 text_color_inactive">
            Личный кабинет
          </span>
        </li>
      </ul>
    </nav>
  );
}
