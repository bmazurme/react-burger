import React from 'react';
import PropTypes from 'prop-types';

import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './menu-item.module.css';

export default function MenuItem({ id, label, extraClass, active }) {
  return (
    <li className={`${style.item} pl-5 pr-5 pb-4 pt-4 ${extraClass && extraClass}`}>
      <BurgerIcon type={`${active ? 'primary' : 'secondary'}`} />
      <span className={`text text_type_main-default pl-2 ${!active && 'text_color_inactive'}`}>
        {label}
      </span>
    </li>
  );
}

MenuItem.protoType = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  extraClass: PropTypes.string,
}
