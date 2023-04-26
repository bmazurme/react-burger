import React from 'react';

import {
  Logo, BurgerIcon, ListIcon, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Menu from '../menu';

import withExtraClass from '../../hocs/with-extra-class';

import style from './app-header.module.css';

const mainLinks = [
  {
    id: 0,
    label: 'Конструктор',
    active: true,
    extraClass: '',
    icon: BurgerIcon,
  },
  {
    id: 1,
    label: 'Лента заказов',
    active: false,
    extraClass: 'ml-2',
    icon: ListIcon,
  },
];
const userLinks = [
  {
    id: 0,
    label: 'Личный кабинет',
    active: false,
    extraClass: '',
    icon: ProfileIcon,
  },
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
