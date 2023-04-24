import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item';

import style from './menu.module.css';

export default function Menu({ links, extraClass }) {
  return (
    <nav className={style.nav}>
      <ul className={extraClass}>
        {links.map((x) => (
          <MenuItem
            key={x.id}
            id={x.id}
            label={x.label}
            active={x.active}
            extraClass={x.extraClass}
          />
        ))}
      </ul>
    </nav>
  );
}

const linkPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  extraClass: PropTypes.string,
});

Menu.protoType = {
  links: PropTypes.arrayOf(linkPropTypes),
  extraClass: PropTypes.string,
}
