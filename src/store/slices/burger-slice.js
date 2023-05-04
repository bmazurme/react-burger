import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    bun: null,
    mainOrSauce: [],
    price: 0,
  },
};

const slice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    setBun: (
      state,
      { payload: data },
    ) => ({
      ...state,
      data: {
        ...state.data,
        bun: data,
        price: data.price + state.data.mainOrSauce.reduce((sumPrice, x) => (sumPrice + x.price), 0),
      }}),
    setMainOrSauce: (
      state,
      { payload: data },
    ) => ({
      ...state,
      data: {
        ...state.data,
        mainOrSauce: [data, ...state.data.mainOrSauce].map((x, i) => ({ ...x, index: i })),
        price: (state.data.bun?.price ? state.data.bun.price : 0)
          + [data, ...state.data.mainOrSauce].reduce((sumPrice, x) => (sumPrice + x.price), 0),
      },
    }),
    removeIngredient: (
      state,
      { payload: data },
    ) => ({
      ...state,
      data: {
        ...state.data,
        mainOrSauce: state.data.mainOrSauce
          .filter((x) => x.index !== data)
          .map((x, i) => ({ ...x, index: i })),
        price: (state.data.bun?.price ? state.data.bun.price : 0)
          + state.data.mainOrSauce
            .filter((x) => x.index !== data)
            .reduce((sumPrice, x) => (sumPrice + x.price), 0),
      },
    }),
    setItems: (
      state,
      { payload: data },
    ) => ({ ...state, data: { ...state.data, mainOrSauce: [...data] } }),
  },
});

export const { setBun, setMainOrSauce, removeIngredient, setItems } = slice.actions;

export default slice.reducer;

export const selectBurger = (state) => state.burger.data;
