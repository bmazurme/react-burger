import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './menu-item-links.module.css';

export default function MenuItemLinks({ links }) {
  return (
    <ul className={style.sublinks}>
      {links.map(({
        id, label, url, handler,
      }) => (
        <NavLink
          key={id}
          to={url}
          className={({ isActive }) => classNames(style.sublink, 'text text_type_main-default', { [style.inactive]: !isActive })}
          onClick={handler}
          end
        >
          {label}
        </NavLink>
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
