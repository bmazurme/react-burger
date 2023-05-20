import { createSlice } from '@reduxjs/toolkit';

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
// @ts-ignore
export const selectOrder = (state) => state.order.data;
