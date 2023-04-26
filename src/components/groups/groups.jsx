import React from 'react';
import PropTypes from 'prop-types';

import Group from '../group';
import { cardPropTypes } from '../../utils/types';

import style from './groups.module.css';

export default function Groups({ cards, groups, onClickIngredient }) {
  return (
    <ul className={style.groups}>
      {groups.map(({ id, label }, i) => (
        <Group
          id={id}
          label={label}
          cards={cards}
          onClickIngredient={onClickIngredient}
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
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  groups: PropTypes.arrayOf(groupPropTypes),
  onClickIngredient: PropTypes.func.isRequired,
}
