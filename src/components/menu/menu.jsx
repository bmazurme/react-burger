import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item';

import { linkPropTypes } from '../../utils/types';

export default function Menu({ links, extraClass, onClick }) {
  return (
    <ul className={extraClass}>
      {links.map((x, i) => (<MenuItem key={i} {...x} onClick={onClick} />))}
    </ul>
  );
}

Menu.protoType = {
  links: PropTypes.arrayOf(linkPropTypes),
  extraClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
