/* eslint-disable no-restricted-globals */
import React, { useCallback } from 'react';
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';

import ForgotPage from './pages/forgot';
import HistoryPage from './pages/history';
import IngredientPage from './pages/ingredient';
import MainPage from './pages/main';
import NotFoundPage from './pages/not-found';
import ProfilePage from './pages/profile';
import QueuePage from './pages/queue';
import ResetPage from './pages/reset';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';

import Modal from './components/modal';
import OrderInfo from './components/order-info';
import cards from './mocks/data';

import ErrorBoundary from './components/error-boundary';

import { Urls } from './utils';

export default function App() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClose = useCallback(() => navigate(state || Urls.BASE), [state, navigate]);

  return (
    <ErrorBoundary>
      <Routes location={state || location}>
        <Route index element={(<MainPage />)} />
        <Route path={Urls.FORGOT} element={(<ForgotPage />)} />
        <Route path={Urls.HISTORY} element={(<HistoryPage />)} />
        <Route path={Urls.INGREDIENT} element={(<IngredientPage />)} />
        <Route path={Urls.PROFILE.INDEX} element={(<ProfilePage />)} />
        <Route path={Urls.QUEUE.INDEX} element={(<QueuePage />)} />
        <Route path={Urls.RESET} element={(<ResetPage />)} />
        <Route path={Urls.SIGN.IN} element={(<SigninPage />)} />
        <Route path={Urls.SIGN.UP} element={(<SignupPage />)} />
        <Route path={Urls[404]} element={(<NotFoundPage />)} />
      </Routes>
      {state?.pathname
        && (
        <Routes>
          <Route
            path={Urls.QUEUE.ID}
            element={(
              <Modal
                isOpen
                onClose={handleClose}
                children={(
                  <OrderInfo currentOrder={{
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
            )}
          />
        </Routes>
        )}
    </ErrorBoundary>
  );
}
