import React from 'react';

import Logo from '../logo';
import Menu from '../menu';
import MenuButton from '../menu-button';

import withExtraClass from '../../hocs/with-extra-class';

import mainLinks from '../../mocks/main-links';

import style from './app-header.module.css';

const MainMenu = withExtraClass(style.main_menu)(Menu);

export default function AppHeader() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.main_menu}>
          <MainMenu links={mainLinks.slice(0, 2)} />
        </nav>
        <Logo />
        <nav className={style.user_menu}>
          <MenuButton links={mainLinks} />
        </nav>
      </div>
    </header>
  );
}
