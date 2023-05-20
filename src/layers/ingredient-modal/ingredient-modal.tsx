import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Modal from '../../components/modal';
import IngredientDetails from '../../components/ingredient-details';

import { Urls } from '../../utils';

export default function IngredientModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClose = useCallback(() => {
    navigate(location.state || Urls.BASE);
  }, [location.state, navigate]);

  return (<Modal isOpen onClose={handleClose} children={(<IngredientDetails />)} />);
}
