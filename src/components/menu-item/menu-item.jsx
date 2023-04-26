import React from 'react';
import PropTypes from 'prop-types';

import style from './menu-item.module.css';

export default function MenuItem({ label, extraClass, active, icon }) {
  const Icon = ({ component: Component, active }) => (<Component type={active ? 'primary' : 'secondary'} />);

  return (
    <li className={`${style.item} pl-5 pr-5 pb-4 pt-4 ${extraClass && extraClass}`}>
      <a href="/" className={style.link}>
        <Icon active={active} component={icon} />
        <span className={`text text_type_main-default pl-2 ${!active && 'text_color_inactive'}`}>
          {label}
        </span>
      </a>
    </li>
  );
}

MenuItem.protoType = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  extraClass: PropTypes.string,
  icon: PropTypes.node.isRequired,
}
