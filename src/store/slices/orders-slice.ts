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
});

export const { setOrders } = slice.actions;
export default slice.reducer;
export const selectOrders = (state: RootState) => state.orders.data;
