import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import ForgotPage from './pages/forgot';
import IngredientPage from './pages/ingredient';
import MainPage from './pages/main';
import NotFoundPage from './pages/not-found';
import ProfilePage from './pages/profile';
import ResetPage from './pages/reset';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import ErrorBoundary from './components/error-boundary';

import { store } from './store';

import { Urls } from './utils';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path={Urls.FORGOT} element={(<ForgotPage />)} />
            <Route path={Urls.INGREDIENT} element={(<IngredientPage />)} />
            <Route path={Urls.BASE} element={(<MainPage />)} />
            <Route path={Urls.PROFILE.INDEX} element={(<ProfilePage />)} />
            <Route path={Urls.RESET} element={(<ResetPage />)} />
            <Route path={Urls.SIGN.IN} element={(<SigninPage />)} />
            <Route path={Urls.SIGN.UP} element={(<SignupPage />)} />
            <Route path={Urls[404]} element={(<NotFoundPage />)} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}
