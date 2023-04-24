import React from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Menu from '../menu';

import withExtraClass from '../../hocs/withExtraClass';

import style from './app-header.module.css';

const mainLinks = [
  { id: 0, label: 'Конструктор', active: true, extraClass: '' },
  { id: 1, label: 'Лента заказов', active: false, extraClass: 'ml-2' },
];
const userLinks = [
  { id: 0, label: 'Личный кабинет', active: false, extraClass: '' },
];

const MainMenu = withExtraClass(style.main_menu)(Menu);
const UserMenu = withExtraClass(style.user_menu)(Menu);

export default function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <MainMenu links={mainLinks} />
        <Logo />
        <UserMenu links={userLinks} />
      </div>
    </header>
  );
}
