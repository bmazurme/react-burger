import React from 'react';

import { Logo as LogoLarge } from '@ya.praktikum/react-developer-burger-ui-components';

import img from '../../images/logo.svg';
import style from './logo.module.css';

export default function Logo() {
  return (
    <button type="button" className={style.logo}>
      <div className={style.xl}>
        <LogoLarge />
      </div>
      <img src={img} alt="logo" className={style.xs} />
    </button>
  );
}
