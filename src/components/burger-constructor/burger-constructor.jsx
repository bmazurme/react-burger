import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import ConstructorBlock from '../constructor-block';
import ConstructorBlocks from '../constructor-blocks';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Preloader from '../preloader';
import Modal from '../modal';

import { selectBurger, setNumber } from '../../store/slices/burger-slice';
import { usePostOrderMutation } from '../../store/api/order-api/endpoints';
import { useModal } from '../../hooks/use-modal';
import useUser from '../../hooks/use-user';

import { Urls } from '../../utils';

import style from './burger-constructor.module.css';

export default function BurgerConstructor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useUser();
  const { bun, mainOrSauce, number } = useSelector(selectBurger);
  const [postOrder, { isLoading, isError }] = usePostOrderMutation();
  const { isModalOpen, openModal, closeModal } = useModal();

  const onClick = async () => {
    const data = {
      ingredients: [bun, ...mainOrSauce]
        .filter((x) => x?._id)
        .map((x) => x?._id),
    };

    if (data.ingredients.length > 0) {
      if (userData) {
        const { data: result } = await postOrder(data);
        openModal();
        dispatch(setNumber(result?.order?.number));
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
      {isModalOpen
        && (
        <Modal
          isOpen={isModalOpen}
          onClose={closePopup}
          children={<OrderDetails number={number} />}
        />
        )}
      {isLoading && <Preloader />}
    </section>
  );
}
