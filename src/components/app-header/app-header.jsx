import React from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

import Menu from '../menu';
import UserMenu from '../user-menu';

import style from './app-header.module.css';

export default function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Menu/>
        <Logo/>
        <UserMenu />
      </div>
    </header>
  );
}
