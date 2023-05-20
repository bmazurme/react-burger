/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { ingredientApi } from '../api/ingredient-api/create-api';

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
      // @ts-ignore
      .addMatcher(ingredientApi.endpoints.getIngredients.matchPending, (state, action) => {
        // for debug...
        console.log('pending', action);
      })
      // @ts-ignore
      .addMatcher(ingredientApi.endpoints.getIngredients.matchFulfilled, (state, action) => {
        // for debug...
        console.log('fulfilled', action);
        // @ts-ignore
        return {
          ...state,
          data: action.payload.data.map((x: TypeCard) => ({ ...x, thumbnail: x.image, text: x.name })),
        };
      })
      // @ts-ignore
      .addMatcher(ingredientApi.endpoints.getIngredients.matchRejected, (state, action) => {
        // for debug...
        console.log('rejected', action);
      });
  },
});

export const { setIngredient } = slice.actions;

export default slice.reducer;

export const selectIngredient = (state: RootState) => state.ingredient.data;
