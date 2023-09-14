import React from 'react';
import { useNavigate } from 'react-router';

import ConstructorBlock from '../constructor-block';
import ConstructorBlocks from '../constructor-blocks';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Preloader from '../preloader';
import Modal from '../modal';

import { setNumber } from '../../store/slices';
import { usePostOrderMutation } from '../../store';
import { useModal } from '../../hooks/use-modal';
import { useAppDispatch, useBurger, useUser } from '../../hooks';

import { Urls } from '../../utils';

import style from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userData = useUser();
  const { bun, mainOrSauce, number } = useBurger();
  const [postOrder, { isLoading }] = usePostOrderMutation();
  const { isModalOpen, openModal, closeModal } = useModal();

  const onClick = async () => {
    const data = {
      ingredients: [bun, ...mainOrSauce].filter((x) => x?._id).map((x) => x?._id),
    };

    if (data.ingredients.length > 0) {
      if (userData) {
        try {
          await postOrder(data);
          openModal();
        } catch (e) {
          // need modal
          console.log(e);
        }
      } else {
        navigate(Urls.SIGN.IN);
      }
    }
  };

  const closePopup = () => {
    dispatch(setNumber(null));
    closeModal();
  };

  return (
    <section className={style.main}>
      <ConstructorBlock position="top" />
      <ConstructorBlocks />
      <ConstructorBlock position="bottom" />
      <ConstructorFooter onClick={onClick} />
      {isModalOpen && (<Modal onClose={closePopup} children={<OrderDetails number={number!} />} />)}
      {isLoading && <Preloader />}
    </section>
  );
}
