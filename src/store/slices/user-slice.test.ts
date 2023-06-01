/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';

import userSlice, { logOut } from './user-slice';

const expectedOrder = {
  payload: ['x', 'y'],
  type: 'order/setOrder',
};

describe('order', () => {
  test('set order', () => {
    expect(logOut()).toEqual(expectedOrder);
  });
});
