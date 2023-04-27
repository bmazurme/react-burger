import React, { useState } from 'react';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Menu from '../menu';
import Hamburger from '../hamburger';

import withExtraClass from '../../hocs/with-extra-class';

import mainLinks from '../../mocks/mainLinks';

import style from './app-header.module.css';

const MainMenu = withExtraClass(style.main_menu)(Menu);
const UserMenu = withExtraClass(style.user_menu)(Menu);

export default function AppHeader() {
  const [links, setLinks] = useState(mainLinks);
  const onClick = (id) => setLinks(links.map((item) => {
    return id === item.id ? { ...item, active: true } : { ...item, active: false };
  }));

  return (
    <header className={style.header}>
      <div className={style.container}>
        <MainMenu links={links.slice(0, 2)} onClick={onClick} />
        <a href="/" className={style.logo}><Logo /></a>
        <UserMenu links={links.slice(2)} onClick={onClick} />
        <Hamburger links={links} onClick={onClick} />
      </div>
    </header>
  );
}
