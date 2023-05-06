import React, { useState } from 'react';

import Logo from '../logo';
import Menu from '../menu';
import MenuButton from '../menu-button';

import withExtraClass from '../../hocs/with-extra-class';

import mainLinks from '../../mocks/main-links';

import style from './app-header.module.css';

const MainMenu = withExtraClass(style.main_menu)(Menu);
const UserMenu = withExtraClass(style.user_menu)(Menu);

export default function AppHeader() {
  const [links, setLinks] = useState(mainLinks);
  const onClick = (id) => setLinks(links
    .map((item) => (id === item.id ? { ...item, active: true } : { ...item, active: false })));

  return (
    <header className={style.header}>
      <div className={style.container}>
        <nav className={style.main_menu}>
          <MainMenu links={links.slice(0, 2)} onClick={onClick} />
        </nav>
        <Logo />
        <nav className={style.user_menu}>
          <UserMenu links={links.slice(2)} onClick={onClick} />
        </nav>
        <MenuButton links={links} onClick={onClick} />
      </div>
    </header>
  );
}
