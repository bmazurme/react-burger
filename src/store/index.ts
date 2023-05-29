// https://redux-toolkit.js.org/rtk-query/overview
import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  burgerSlice,
  orderSlice,
  ordersSlice,
  userSlice,
  ingredientSlice,
} from './slices';

import {
  authApi,
  ingredientApi,
  orderApi,
  passwordApi,
  userApi,
  wssApi,
} from './api';

export * from './api/auth-api/endpoints';
export * from './api/ingredient-api/endpoints';
export * from './api/order-api/endpoints';
export * from './api/password-api/endpoints';
export * from './api/user-api/endpoints';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    order: orderSlice,
    orders: ordersSlice,
    user: userSlice,
    ingredient: ingredientSlice,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [wssApi.reducerPath]: wssApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      authApi.middleware,
      ingredientApi.middleware,
      passwordApi.middleware,
      userApi.middleware,
      orderApi.middleware,
      wssApi.middleware,
    ),
  devTools: true,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
