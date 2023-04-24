import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import style from './cards-group.module.css';

export default function CardsGroup({ id, label, cards }) {
  return (
    <>
      <h2 className={`${style.title} text text_type_main-medium pb-6 pt-6`} id={id}>{label}</h2>
      {cards.filter((x) => x.type === id).map((elem, i) => (<Card card={elem} key={i} />))}
    </>
  );
}

const cardsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

const cardsGroupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  cards: PropTypes.arrayOf(cardsPropTypes).isRequired,
});

CardsGroup.protoType = {
	card: cardsGroupPropTypes.isRequired
}

