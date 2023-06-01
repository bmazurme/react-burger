/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';

import { selectIngredient } from './ingredient-slice';

const expectedIngredient = {
  payload: [],
  type: 'ingredient/selectIngredient',
};

describe('ingredient', () => {
  test('set ingredient', () => {
    expect(selectIngredient([] as any)).toEqual(expectedIngredient);
  });
});
