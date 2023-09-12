import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Modal from '../../components/modal';
import OrderInfo from '../../components/order-info';

import { Urls } from '../../utils';

export default function ProfileOrderInfoModal() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClose = useCallback(() => navigate(state || Urls.BASE), [state, navigate]);

  return (<Modal onClose={handleClose} children={(<OrderInfo path="user" />)} />);
}
