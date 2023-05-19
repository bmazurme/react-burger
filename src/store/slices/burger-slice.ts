import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    bun: null,
    mainOrSauce: [],
    price: 0,
    number: null,
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
        // @ts-ignore
        price: data.price + state.data.mainOrSauce.reduce((sumPrice, x) => (sumPrice + x.price), 0),
      },
    }),
    // @ts-ignore
    setMainOrSauce: (
      state,
      { payload: data },
    ) => ({
      ...state,
      data: {
        ...state.data,
        mainOrSauce: [data, ...state.data.mainOrSauce].map((x, i) => ({ ...x, index: i })),
        // @ts-ignore
        price: (state.data.bun?.price ? state.data.bun.price : 0)
          + [data, ...state.data.mainOrSauce].reduce((sumPrice, x) => (sumPrice + x.price), 0),
      },
    }),
    // @ts-ignore
    removeIngredient: (
      state,
      { payload: data },
    ) => ({
      ...state,
      data: {
        ...state.data,
        mainOrSauce: state.data.mainOrSauce
        // @ts-ignore
          .filter((x) => x.index !== data)
          // @ts-ignore
          .map((x, i) => ({ ...x, index: i })),
        // @ts-ignore
        price: (state.data.bun?.price ? state.data.bun.price : 0)
          + state.data.mainOrSauce
            // @ts-ignore
            .filter((x) => x.index !== data)
            // @ts-ignore
            .reduce((sumPrice, x) => (sumPrice + x.price), 0),
      },
    }),
    // @ts-ignore
    setItems: (
      state,
      { payload: data },
    ) => ({ ...state, data: { ...state.data, mainOrSauce: [...data] } }),
    setNumber: (
      state,
      { payload: data },
    ) => ({ ...state, data: { ...state.data, number: data } }),
  },
});

export const {
  setBun, setMainOrSauce, removeIngredient, setItems, setNumber,
} = slice.actions;

export default slice.reducer;
// @ts-ignore
export const selectBurger = (state) => state.burger.data;
