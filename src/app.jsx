import React, { useState, useEffect } from 'react';

import MainPage from './pages/main';
import ErrorBoundary from './components/error-boundary';

import { BurgerContext } from './context/burger-context';

export default function App() {
  const initBurger = {
    bun: null,
    mainOrSauce: [],
    price: 0,
  };

  const [burger, setBurger] = useState(initBurger);

  useEffect(() => {
    const price = (burger.bun?.price ? burger.bun.price : 0)
      + burger.mainOrSauce.reduce((sumPrice, x) => (sumPrice + x.price), 0);
    setBurger({ ...burger, price });
  }, [burger.bun?._id, burger.mainOrSauce.length]);

  // store
  // routes
  return (
    <BurgerContext.Provider value={{ burger, setBurger }}>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </BurgerContext.Provider>
  );
}
