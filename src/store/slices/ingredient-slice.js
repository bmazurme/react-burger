import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'ingredient',
  initialState: { data: [] },
  reducers: {
    setIngredient: (
      state,
      { payload: data },
    ) => ({ ...state, data }),
  },
});

export const { setIngredient } = slice.actions;

export default slice.reducer;

export const selectIngredient = (state) => state.ingredient.data;
