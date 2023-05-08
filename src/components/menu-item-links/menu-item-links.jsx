import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import style from './menu-item-links.module.css';

export default function MenuItemLinks({ links }) {
  return (
    <ul className={style.sublinks}>
      {links.map(({ label }, i) => (
        <li className={`${style.sublink} text text_type_main-default`} key={uuidv4()}>{label}</li>
      ))}
    </ul>
  );
}

MenuItemLinks.propTypes = {
  label: PropTypes.string.isRequired,
};
