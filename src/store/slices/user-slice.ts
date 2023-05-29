import { createSlice } from '@reduxjs/toolkit';
import { authApiEndpoints, userApiEndpoints } from '../api';

import { RootState } from '../index';

// https://redux-toolkit.js.org/rtk-query/usage/examples
const initialState: { data: TypeUser | null } = {
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
      .addMatcher(authApiEndpoints.endpoints.getUser.matchFulfilled, (state, action) => ({
        ...state,
        data: action.payload.user,
      }))
      .addMatcher(authApiEndpoints.endpoints.getUser.matchRejected, (state, action) => {
        console.log('rejected', state, action);
      })
      .addMatcher(userApiEndpoints.endpoints.updateUser.matchFulfilled, (state, action) => ({
        ...state,
        data: action.payload.user,
      }))
      .addMatcher(userApiEndpoints.endpoints.updateUser.matchRejected, (state, action) => {
        console.log('rejected', state, action);
      });
  },
});

export const { logOut } = slice.actions;

export default slice.reducer;

export const selectUser = (state: RootState) => state.user.data;
