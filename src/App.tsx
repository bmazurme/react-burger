import React, { useState } from 'react';

import Modal from './components/modal';

import OrderDetails from './components/order-details';
import IngredientDetails from './components/ingredient-details';

import MainPage from './pages/main';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  // error-boundary-wrapper
  // routes
  return (
    <>
      <MainPage />
      {isPopupOpen && <Modal onClose={closePopup} children={<IngredientDetails />} />}
    </>
  );
}
