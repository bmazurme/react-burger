import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';
import { cardPropTypes } from '../../utils/types';

import style from './group.module.css';

export default function Group({
  id, label, cards, onClick,
}) {
  return (
    <>
      <h2 className={`${style.title} text text_type_main-medium pb-6 pt-6`} id={id}>{label}</h2>
      {cards.filter((x) => x.type === id).map((card, i) => <Card key={i} {...card} onClick={onClick} />)}
    </>
  );
}

const cardsGroupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  onClick: PropTypes.func.isRequired,
});

Group.protoType = {
  card: cardsGroupPropTypes.isRequired,
};
