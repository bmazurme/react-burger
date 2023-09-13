/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import {
  describe, expect, test, it,
} from '@jest/globals';
import fetchMock from 'jest-fetch-mock';

import reducer from './user-slice';
import { authApiEndpoints } from '../api/auth-api/endpoints';

fetchMock.enableMocks();

const initialState = { data: { name: 'name', email: 'email' } };

describe('user', () => {
  it('...', async () => {
    const action = {
      type: authApiEndpoints.endpoints.getUser.matchFulfilled,
      payload: {},
    };

    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
