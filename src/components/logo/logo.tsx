import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo as LogoLarge } from '@ya.praktikum/react-developer-burger-ui-components';

import { Urls } from '../../utils';

import img from '../../images/logo.svg';
import style from './logo.module.css';

export default function Logo() {
  return (
    <NavLink className={style.logo} to={Urls.BASE}>
      <div className={style.xl}>
        <LogoLarge />
      </div>
      <img src={img} alt="logo" className={style.xs} />
    </NavLink>
  );
}
