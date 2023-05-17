import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api/auth-api/create-api';

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
      .addMatcher(authApi.endpoints.getUser.matchPending, (state, action) => {
        // for debug...
        console.log('pending', action);
      })
      .addMatcher(authApi.endpoints.getUser.matchFulfilled, (state, action) => {
        // for debug...
        console.log('fulfilled', action);
        return { ...state, data: action.payload.user };
      })
      .addMatcher(authApi.endpoints.getUser.matchRejected, (state, action) => {
        // for debug...
        console.log('rejected', action);
      });
  },
});

export const { logOut } = slice.actions;

export default slice.reducer;

export const selectUser = (state) => state.user.data;
