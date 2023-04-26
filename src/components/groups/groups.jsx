import React from 'react';
import PropTypes from 'prop-types';

import Group from '../group';

import cards from '../../mocks/data';

import style from './groups.module.css';

export default function Groups({ groups }) {
  return (
    <ul className={style.groups}>
      {groups.map(({ id, label }, i) => (
        <Group
          id={id}
          label={label}
          cards={cards}
          key={i}
        />
      ))}
    </ul>
  );
}

const groupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Groups.protoType = {
  groups: PropTypes.arrayOf(groupPropTypes),
}
