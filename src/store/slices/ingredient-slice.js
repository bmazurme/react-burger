import { createSlice } from '@reduxjs/toolkit';
import { ingredientApi } from '../api/ingredient-api/create-api';

const slice = createSlice({
  name: 'ingredient',
  initialState: { data: [] },
  reducers: {
    setIngredient: (
      state,
      { payload: data },
    ) => ({ ...state, data }),
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(ingredientApi.endpoints.getIngredients.matchPending, (state, action) => {
        // for debug...
        console.log('pending', action);
      })
      .addMatcher(ingredientApi.endpoints.getIngredients.matchFulfilled, (state, action) => {
        // for debug...
        console.log('fulfilled', action);
        return {
          ...state,
          data: action.payload.data.map((x) => ({ ...x, thumbnail: x.image, text: x.name })),
        };
      })
      .addMatcher(ingredientApi.endpoints.getIngredients.matchRejected, (state, action) => {
        // for debug...
        console.log('rejected', action);
      });
  },
});

export const { setIngredient } = slice.actions;

export default slice.reducer;

export const selectIngredient = (state) => state.ingredient.data;
