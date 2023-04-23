import React from 'react';

import {
  Logo, BurgerIcon, ListIcon, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import style from './app-header.module.css';

function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.nav}>
          <ul className={style.menu_main}>
            <li className={`${style.item} pl-5 pr-5 pb-4 pt-4`}>
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default pl-2">
                Конструктор
              </span>
            </li>
            <li className={`${style.item} pl-5 pr-5 pb-4 pt-4 ml-2`}>
              <ListIcon type="secondary" />
              <span className="text text_type_main-default pl-2 text_color_inactive">
                Лента заказов
              </span>
            </li>
          </ul>
        </nav>

        <Logo/>

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
      </div>
    </header>
  );
}

export default AppHeader;
