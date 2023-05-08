import React, { useState, useMemo } from 'react';

import MainPage from '../../pages/main';
import ErrorBoundary from '../error-boundary';

import { BurgerContext } from '../../context/burger-context';

export default function App() {
  const initBurger = {
    bun: null,
    mainOrSauce: [],
    price: 0,
  };

  const [burger, setBurger] = useState(initBurger);
  const price = (burger) => (burger.bun?.price ? burger.bun.price : 0) 
    + burger.mainOrSauce.reduce((sumPrice, x) => (sumPrice + x.price), 0);
  const memoizedPrice = useMemo(() => price(burger), [burger.bun?._id, burger.mainOrSauce.length]);

  // store
  // routes
  return (
    <BurgerContext.Provider value={{ burger: { ...burger, price: memoizedPrice }, setBurger }}>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </BurgerContext.Provider>
  );
}
