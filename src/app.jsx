import React from 'react';
import { Provider } from 'react-redux';

import MainPage from './pages/main';
import ErrorBoundary from './components/error-boundary';

import { store } from './store';

export default function App() {
  // routes
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </Provider>
  );
}
