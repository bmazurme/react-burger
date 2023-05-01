import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import ConstructorBlock from '../constructor-block';
import ConstructorFooter from '../constructor-footer';
import Modal from '../modal';
import OrderDetails from '../order-details';

import { cardPropTypes } from '../../utils/types';
import mockCards from '../../mocks/data';

import style from './burger-constructor.module.css';

const blockStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };

export default function BurgerConstructor({ cards, setItems }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const card = cards[0] ? cards[0] : mockCards[0];
  const currentBun = {
    ...card,
    thumbnail: card.image,
    isLocked: true,
  };

  const [{ isOver, canDrop }, ref] = useDrop({
    accept: ['card'],
    drop: (c) => {
      console.log(c);
      setItems([{ ...c, index: cards.length }, ...cards]);

      return c;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: () => true,
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return 'rgb(188,251,255)';
      } if (!canDrop) {
        return 'rgb(255,188,188)';
      }
    }

    return '';
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const removeElement = (i) => {
    setItems(cards.filter((x) => x.index !== i));
  };

  return (
    <section className={style.main} ref={ref} style={{ backgroundColor: getBackgroundColor() }}>
      <ConstructorBlock {...currentBun} position="top" style={style} />
      <ul className={style.items} style={blockStyle}>
        {cards.map((x, i) => (
          <ConstructorBlock key={i} {...x} style={style} removeElement={removeElement} />
        ))}
      </ul>
      <ConstructorBlock {...currentBun} position="bottom" style={style} />
      <ConstructorFooter openPopup={openPopup} />
      <Modal isOpen={isPopupOpen} onClose={closePopup} children={<OrderDetails />} />
    </section>
  );
}

BurgerConstructor.protoType = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
};
