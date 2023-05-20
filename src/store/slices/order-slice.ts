import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../index';

const slice = createSlice({
  name: 'order',
  initialState: { data: [] },
  reducers: {
    setOrder: (
      state,
      { payload: data },
    ) => ({ ...state, data }),
  },
});

export const { setOrder } = slice.actions;

export default slice.reducer;

export const selectOrder = (state: RootState) => state.order.data;
