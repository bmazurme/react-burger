import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import ForgotPage from './pages/forgot';
import IngredientPage from './pages/ingredient';
import MainPage from './pages/main';
import NotFoundPage from './pages/not-found';
import OrderInfoPage from './pages/order-info';
import ProfilePage from './pages/profile';
import ProfileIndexPage from './pages/profile-index';
import ProfileOrdersPage from './pages/profile-orders';
import QueuePage from './pages/queue';
import ResetPage from './pages/reset';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';

import IngredientModal from './layers/ingredient-modal/ingredient-modal';

import ErrorBoundary from './components/error-boundary';

import { Urls } from './utils';

// https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
export default function App() {
  const location = useLocation();

  useEffect(() => {
    location.state = null;
  }, []);

  return (
    <ErrorBoundary>
      <Routes location={location.state?.pathname || location}>
        <Route index element={(<MainPage />)} />
        <Route path={Urls.FORGOT} element={(<ForgotPage />)} />
        <Route path={Urls.INGREDIENT} element={(<IngredientPage />)} />
        <Route path={Urls.PROFILE.INDEX} element={<ProfilePage />}>
          <Route index element={(<ProfileIndexPage />)} />
          <Route path={Urls.PROFILE.ORDERS} element={(<ProfileOrdersPage />)} />
        </Route>
        <Route path={Urls.QUEUE.INDEX} element={(<QueuePage />)} />
        <Route path={Urls.RESET} element={(<ResetPage />)} />
        <Route path={Urls.SIGN.IN} element={(<SigninPage />)} />
        <Route path={Urls.SIGN.UP} element={(<SignupPage />)} />
        <Route path={Urls[404]} element={(<NotFoundPage />)} />
      </Routes>
      {location.state?.pathname
        && (
        <Routes>
          <Route path={Urls.INGREDIENT} element={(<IngredientModal />)} />
          <Route path={Urls.QUEUE.ID} element={(<OrderInfoPage />)} />
        </Routes>
        )}
    </ErrorBoundary>
  );
}
