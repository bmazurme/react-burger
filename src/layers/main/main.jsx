import React from 'react';

import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';

export default function Main() {
  return (
    <main className="content">
      <BurgerIngredients />
      <BurgerConstructor />
      {/* <IngredientDetails /> */}
      {/* <OrderDetails /> */}
    </main>
  );
}
