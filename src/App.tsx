import React from 'react';

import AppHeader from './components/app-header';
import BurgerIngredients from './components/burger-ingredients';
import BurgerConstructor from './components/burger-constructor';

function App() {
  return (
    <div className="root">
      <AppHeader />
      <main className="content">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
