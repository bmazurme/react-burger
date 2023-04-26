import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ConstructorBlock from '../constructor-block';
import ConstructorFooter from '../constructor-footer';
import Modal from '../modal';
import OrderDetails from '../order-details';

import { cardPropTypes } from '../../utils/types';
import mockCards from '../../mocks/data';

import style from './burger-constructor.module.css';

const blockStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };

export default function BurgerConstructor({ cards }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const card = cards[0] ? cards[0] : mockCards[0];
  const currentBun = {
    ...card,
    thumbnail: card.image,
    isLocked: true,
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className={style.main}>
      <ConstructorBlock {...currentBun} position="top" style={style} />
      <ul className={style.items} style={blockStyle} >
        {cards.map((x, i) => (
          <ConstructorBlock key={i} { ...x } style={style} />
        ))}
      </ul>
      <ConstructorBlock {...currentBun} position="bottom" style={style} />
      <ConstructorFooter openPopup={openPopup} />
      {isPopupOpen && <Modal isOpen={isPopupOpen} onClose={closePopup} children={<OrderDetails />} />}
    </section>
  );
}

BurgerConstructor.protoType = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
}
