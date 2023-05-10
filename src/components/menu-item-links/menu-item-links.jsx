import React from 'react';
import PropTypes from 'prop-types';

import style from './menu-item-links.module.css';

export default function MenuItemLinks({ links }) {
  return (
    <ul className={style.sublinks}>
      {links.map(({ id, label }) => (
        <li className={`${style.sublink} text text_type_main-default`} key={id}>
          {label}
        </li>
      ))}
    </ul>
  );
}

const menuItemLinks = PropTypes.shape({
  id: PropTypes.string.isRequired,
});

MenuItemLinks.propTypes = {
  links: PropTypes.arrayOf(menuItemLinks).isRequired,
};
