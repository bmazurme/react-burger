import React, { useState } from 'react';

import ConstructorBlock from '../constructor-block';
import ConstructorBlocks from '../constructor-blocks';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Modal from '../modal';

import style from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className={style.main}>
      <ConstructorBlock position="top" />
      <ConstructorBlocks />
      <ConstructorBlock position="bottom" />
      <ConstructorFooter openPopup={openPopup} />
      <Modal
        isOpen={isPopupOpen}
        onClose={closePopup}
        children={<OrderDetails number="034536" />}
      />
    </section>
  );
}
