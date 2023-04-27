import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item';

import { linkPropTypes } from '../../utils/types';

import style from './menu.module.css';

export default function Menu({ links, extraClass, onClick }) {
  return (
    <nav className={style.menu}>
      <ul className={extraClass}>
        {links.map((x, i) => (<MenuItem key={i} {...x} onClick={onClick} />))}
      </ul>
    </nav>
  );
}

Menu.protoType = {
  links: PropTypes.arrayOf(linkPropTypes),
  extraClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
