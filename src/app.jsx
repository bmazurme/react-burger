import React from 'react';

import MainPage from './pages/main';
import ErrorBoundary from './components/error-boundary';

export default function App() {
  // store
  // routes
  return (
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  );
}
