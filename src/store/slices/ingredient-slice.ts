/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { ingredientApiEndpoints } from '../api';

import { RootState } from '../index';

type TypeIngredient = {
  data: TypeCard[],
};

const initialState: TypeIngredient = {
  data: [],
};

const slice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    setIngredient: (
      state,
      { payload: data },
    ) => ({ ...state, data }),
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(ingredientApiEndpoints.endpoints.getIngredients.matchFulfilled, (state, action) => ({
        ...state,
        data: action.payload.data.map((x) => ({ ...x, thumbnail: x.image, text: x.name })),
      }))
      .addMatcher(ingredientApiEndpoints.endpoints.getIngredients.matchRejected, (state, action) => {
        console.log('rejected', state, action);
      });
  },
});

export const { setIngredient } = slice.actions;

export default slice.reducer;

export const selectIngredient = (state: RootState) => state.ingredient.data;
