/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';

import { setOrders } from './orders-slice';

const expectedOrders = {
  payload: ['x', 'y'],
  type: 'orders/setOrders',
};

describe('orders', () => {
  test('set orders', () => {
    expect(setOrders(['x', 'y'])).toEqual(expectedOrders);
  });
});
