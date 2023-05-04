import React from 'react';
import PropTypes from 'prop-types';

import Group from '../group';
import { cardPropTypes } from '../../utils/types';

import style from './groups.module.css';

export default function Groups(props) {
  const { groups } = props;
  
  return (
    <ul className={style.groups}>
      {groups.map((group, i) => <Group {...group} {...props} key={i} />)}
    </ul>
  );
}

const groupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Groups.protoType = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  groups: PropTypes.arrayOf(groupPropTypes),
  onClick: PropTypes.func.isRequired,
};
