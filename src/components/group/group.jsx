/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';
import { cardPropTypes } from '../../utils';

import style from './group.module.css';

export default function Group({
  id, label, cards, refCurr,
}) {
  return (
    <li className={style.group} ref={refCurr}>
      <h2 className={`${style.title} text text_type_main-medium pb-6 pt-6`} id={id}>{label}</h2>
      <ul className={style.ingredients}>
        {cards.filter((x) => x.type === id).map((card) => <Card key={card._id} {...card} />)}
      </ul>
    </li>
  );
}

const cardsGroupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  refCurr: PropTypes.any.isRequired,
});

Group.propTypes = {
  card: cardsGroupPropTypes,
};
