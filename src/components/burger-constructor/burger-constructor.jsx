import React, { useState, useContext, useEffect } from 'react';

import ConstructorBlock from '../constructor-block';
import ConstructorBlocks from '../constructor-blocks';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Modal from '../modal';

import useMutation from '../../hooks/use-mutation';
import { BurgerContext } from '../../context/burger-context';

import style from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const { burger } = useContext(BurgerContext);
  const { bun, mainOrSauce } = burger;
  const { state, postOrder } = useMutation({ url: 'orders' });

  const onClick = async () => {
    const data = { 
      ingredients: [bun, ...mainOrSauce]
        .filter((x) => x?._id)
        .map((x) => x?._id),
    };

    if (data.ingredients.length > 0) {
      await postOrder({ url: 'orders', method: 'POST', body: data });
      openPopup();
    }
  };

  return (
    <section className={style.main}>
      <ConstructorBlock position="top" />
      <ConstructorBlocks />
      <ConstructorBlock position="bottom" />
      <ConstructorFooter openPopup={onClick} />
      <Modal
        isOpen={isPopupOpen}
        onClose={closePopup}
        children={<OrderDetails number={state.data?.order?.number} />}
      />
    </section>
  );
}
