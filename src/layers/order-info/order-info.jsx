/* eslint-disable no-restricted-globals */
import React, { useCallback } from 'react';
import {
  useLocation, useNavigate,
} from 'react-router-dom';

import Modal from '../../components/modal';
import cards from '../../mocks/data';
import { Urls } from '../../utils';
import Order from '../../components/order-info';

export default function OrderInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line max-len
  const handleClose = useCallback(() => navigate(location.state || Urls.BASE), [location.state, navigate]);

  return (
    <Modal
      isOpen
      onClose={handleClose}
      children={(
        <Order currentOrder={{
          number: '034535',
          time: ' Сегодня, 16:20',
          name: 'Death Star Starship Main бургер',
          price: 480,
          icons: cards.slice(0, 5),
          count: cards.length - 5,
          cards,
        }}
        />
      )}
    />
  );
}
