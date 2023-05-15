// https://redux-toolkit.js.org/rtk-query/overview
import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';

import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import burgerSlice from './slices/burger-slice';
// import orderSlice from './slices/order-slice';
import userSlice from './slices/user-slice';

import { authApi } from './api/auth-api/create-api';
import { ingredientApi } from './api/ingredient-api/create-api';
import { orderApi } from './api/order-api/create-api';
import { passwordApi } from './api/password-api/create-api';
import { userApi } from './api/user-api/create-api';

export * from './api/ingredient-api/endpoints';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    user: userSlice,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    authApi.middleware,
    ingredientApi.middleware,
    passwordApi.middleware,
    userApi.middleware,
    orderApi.middleware,
  ),
  devTools: [enhancer({ realtime: true })],
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
