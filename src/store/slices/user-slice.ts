import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api/auth-api/create-api';
import { userApi } from '../api/user-api/create-api';

// https://redux-toolkit.js.org/rtk-query/usage/examples
const initialState = {
  data: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // @ts-ignore
      .addMatcher(authApi.endpoints.getUser.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        return { ...state, data: action.payload.user };
      })
      // @ts-ignore
      .addMatcher(authApi.endpoints.getUser.matchRejected, (state, action) => {
        console.log('rejected', action);
      })
      // @ts-ignore
      .addMatcher(userApi.endpoints.updateUser.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        return { ...state, data: action.payload.user };
      })
      // @ts-ignore
      .addMatcher(userApi.endpoints.updateUser.matchRejected, (state, action) => {
        console.log('rejected', action);
      });
  },
});

export const { logOut } = slice.actions;

export default slice.reducer;
// @ts-ignore
export const selectUser = (state) => state.user.data;
