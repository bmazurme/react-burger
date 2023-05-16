import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: { data: null },
  reducers: {
    setUser: (
      state,
      { payload: data },
    ) => ({ ...state, data }),
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;

export const selectUser = (state) => state.user.data;
