import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ConstructorBlock from '../constructor-block';
import ConstructorBlocks from '../constructor-blocks';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Modal from '../modal';

import { cardPropTypes } from '../../utils/types';

import style from './burger-constructor.module.css';

export default function BurgerConstructor({
  items, setItems, currentBun, setCurrentBun, sum,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className={style.main}>
      <ConstructorBlock {...currentBun} position="top" setCurrent={setCurrentBun} />
      <ConstructorBlocks items={items} setItems={setItems} />
      <ConstructorBlock {...currentBun} position="bottom" setCurrent={setCurrentBun} />
      <ConstructorFooter openPopup={openPopup} sum={sum} />
      <Modal isOpen={isPopupOpen} onClose={closePopup} children={<OrderDetails number="034536" />} />
    </section>
  );
}

BurgerConstructor.protoType = {
  items: PropTypes.arrayOf(cardPropTypes).isRequired,
  setItems: PropTypes.func.isRequired,
};
