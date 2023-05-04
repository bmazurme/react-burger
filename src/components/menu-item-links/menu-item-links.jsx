import React from 'react';
import PropTypes from 'prop-types';

import style from './menu-item-links.module.css';

export default function MenuItemLinks({ links }) {
  return (
    <ul className={style.sublinks}>
      {links.map(({ label }, i) => (
        <li className={`${style.sublink} text text_type_main-default`} key={i}>{label}</li>
      ))}
    </ul>
  );
}

MenuItemLinks.protoType = {
  label: PropTypes.string.isRequired,
};
