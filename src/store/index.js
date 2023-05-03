import { configureStore } from '@reduxjs/toolkit';

import ingredientSlice from './slices/ingredient-slice';
import orderSlice from './slices/order-slice';
import userSlice from './slices/user-slice';

export const store = configureStore({
  reducer: {
    ingredient: ingredientSlice,
    order: orderSlice,
    user: userSlice,
  },
});
