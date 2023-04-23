import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import style from './groups.module.css';

export default function CardGroup({ id, label, cards }) {
  return (
    <>
      <h2 className={`${style.title} text text_type_main-medium pb-6 pt-6`} id={id}>{label}</h2>
      {cards.filter((x) => x.type === id).map((elem, i) => (<Card card={elem} key={i} />))}
    </>
  );
}

const cardPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

const cardGroupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
});

CardGroup.protoType = {
	card: cardGroupPropTypes.isRequired
}

