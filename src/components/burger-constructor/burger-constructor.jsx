import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ConstructorBlock from '../constructor-block';
import ConstructorBlocks from '../constructor-blocks';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Modal from '../modal';

import { selectBurger, setNumber } from '../../store/slices/burger-slice';
import { usePostOrderMutation } from '../../store/api/order-api/endpoints';

import style from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const closePopup = () => dispatch(setNumber(null));;
  const { bun, mainOrSauce, number } = useSelector(selectBurger);
  const [postOrder] = usePostOrderMutation();

  const onClick = async () => {
    const data = { 
      ingredients: [bun, ...mainOrSauce]
        .filter((x) => x?._id)
        .map((x) => x?._id),
    };

    const { data: result } = await postOrder(data);
    dispatch(setNumber(result?.order?.number));
  };

  return (
    <section className={style.main}>
      <ConstructorBlock position="top" />
      <ConstructorBlocks />
      <ConstructorBlock position="bottom" />
      <ConstructorFooter onClick={onClick} />
      {number && 
        <Modal
          isOpen={number}
          onClose={closePopup}
          children={<OrderDetails number={number} />}
        />}
    </section>
  );
}
