/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';

import { setOrder } from './order-slice';

const expectedOrder = {
  payload: ['x', 'y'],
  type: 'order/setOrder',
};

describe('order', () => {
  test('set order', () => {
    expect(setOrder(['x', 'y'])).toEqual(expectedOrder);
  });
});
