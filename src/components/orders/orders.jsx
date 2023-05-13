import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Order from '../order';
// import Modal from '../modal';
// import OrderInfo from '../order-info';

// import { useModal } from '../../hooks/use-modal';
// import { Urls } from '../../utils';

import style from './orders.module.css';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Orders() {
  const [currentOrder, setCurrentOrder] = useState(null);
  // const { isModalOpen, openModal, closeModal } = useModal();
  const location = useLocation();
  // const navigate = useNavigate();

  // const closePopup = () => {

  //   setCurrentOrder(null);
  //   closeModal();
  // };

  const onClickOrder = (order) => {
    setCurrentOrder(order);
    // navigate(`${Urls.QUEUE.INDEX}/${123}`);
    // openModal();
  };

  return (
    <section className={`${style.main}`}>
      <Link to="/queue/123" state={{ pathname: location.pathname }}>123</Link>

      <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
      <ul className={style.orders}>
        {arr.map((x, i) => (<Order onClick={onClickOrder} key={x} />))}
      </ul>
      {/* {currentOrder &&

          <Modal
            isOpen={isModalOpen}
            // title="Детали ингредиента"
            onClose={closePopup}
            children={<OrderInfo currentOrder={currentOrder} />}
          />
          } */}

    </section>
  );
}

// BurgerIngredients.propTypes = {
//   cards: PropTypes.arrayOf(cardPropTypes).isRequired,
// };
