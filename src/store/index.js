// https://redux-toolkit.js.org/rtk-query/overview
import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';

import burgerSlice from './slices/burger-slice';
// import orderSlice from './slices/order-slice';
import userSlice from './slices/user-slice';

import { ingredientApi } from './api/ingredient-api/create-api';
import { orderApi } from './api/order-api/create-api';
import { userApi } from './api/user-api/create-api';

export * from './api/ingredient-api/endpoints';

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    user: userSlice,
    // Add the generated reducer as a specific top-level slice
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ingredientApi.middleware,
      userApi.middleware,
      orderApi.middleware,
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
