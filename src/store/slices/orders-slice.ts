import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../index';

// https://redux-toolkit.js.org/rtk-query/usage/examples
const initialState: { data: { orders: TOrder[], total: number, totalToday: number } } = {
  data: { orders: [], total: 0, totalToday: 0 },
};

const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (
      state,
      { payload: data },
    ) => ({ ...state, data }),
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(wssApi.endpoints.getMessages.matchFulfilled, (state, action) => {
  //       console.log(action);
  //       return {
  //         ...state,
  //         data: action,
  //       };
  //     })
  //     .addMatcher(wssApi.endpoints.getMessages.matchRejected, (state, action) => {
  //       console.log('rejected', state, action);
  //     });
  // },
});

export const { setOrders } = slice.actions;

export default slice.reducer;

export const selectOrders = (state: RootState) => state.orders.data;
