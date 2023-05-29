import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Modal from '../../components/modal';
import Order from '../../components/order-info';

import { Urls } from '../../utils';

export default function OrderInfo() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClose = useCallback(() => navigate(state || Urls.BASE), [state, navigate]);

  return (<Modal isOpen onClose={handleClose} children={(<Order />)} />);
}
