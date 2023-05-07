import React, { useContext } from 'react';

import ConstructorBlock from '../constructor-block';
import ConstructorBlocks from '../constructor-blocks';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Modal from '../modal';

import useMutation from '../../hooks/use-mutation';
import { BurgerContext } from '../../context/burger-context';

import style from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const { burger } = useContext(BurgerContext);
  const { bun, mainOrSauce } = burger;
  const { state, post, clear } = useMutation({ url: 'orders' });

  const onClick = async () => {
    const data = { 
      ingredients: [bun, ...mainOrSauce]
        .filter((x) => x?._id)
        .map((x) => x?._id),
    };

    if (data.ingredients.length > 0) {
      await post({ url: 'orders', method: 'POST', body: data });
    }
  };

  return (
    <section className={style.main}>
      <ConstructorBlock position="top" />
      <ConstructorBlocks />
      <ConstructorBlock position="bottom" />
      <ConstructorFooter openPopup={onClick} />

      {state.data?.order?.number &&
        <Modal
          isOpen={state.data?.order?.number}
          onClose={clear}
          children={<OrderDetails number={state.data?.order?.number} />}
        />}
    </section>
  );
}
