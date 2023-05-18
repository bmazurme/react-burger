import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../menu-item';

import { linkPropTypes } from '../../utils';

export default function Menu({ links, extraClass }) {
  return (
    <ul className={extraClass}>
      {links.map((x) => (<MenuItem key={x.id} {...x} />))}
    </ul>
  );
}

Menu.propTypes = {
  links: PropTypes.arrayOf(linkPropTypes),
  extraClass: PropTypes.string,
};
