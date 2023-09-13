import { createSlice } from '@reduxjs/toolkit';

import { authApiEndpoints } from '../api/auth-api/endpoints';
import { userApiEndpoints } from '../api/user-api/endpoints';

import { RootState } from '..';

// https://redux-toolkit.js.org/rtk-query/usage/examples
const initialState: { data: TypeUser | null } = {
  data: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApiEndpoints.endpoints.getUser.matchFulfilled,
        (state, action) => ({
          ...state,
          data: action.payload.user,
        }),
      )
      .addMatcher(
        authApiEndpoints.endpoints.getUser.matchRejected,
        (state, action) => {
          console.log('rejected', state, action);
        },
      )
      .addMatcher(
        userApiEndpoints.endpoints.updateUser.matchFulfilled,
        (state, action) => ({
          ...state,
          data: action.payload.user,
        }),
      )
      .addMatcher(
        userApiEndpoints.endpoints.updateUser.matchRejected,
        (state, action) => {
          console.log('rejected', state, action);
        },
      )
      .addMatcher(
        authApiEndpoints.endpoints.signOut.matchFulfilled,
        (state, action) => ({
          ...state,
          data: action.payload.user,
        }),
      )
      .addMatcher(
        authApiEndpoints.endpoints.signOut.matchRejected,
        (state, action) => {
          console.log('rejected', state, action);
        },
      );
  },
});

export default slice.reducer;
export { slice };
export const selectUser = (state: RootState) => state.user.data;
