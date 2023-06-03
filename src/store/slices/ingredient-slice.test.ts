/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';
import fetchMock from 'jest-fetch-mock';

import cards from '../../mocks/data';

import { setIngredient } from './ingredient-slice';

fetchMock.enableMocks();

const expectedIngredient = {
  payload: cards,
  type: 'ingredient/setIngredient',
};

describe('ingredient', () => {
  test('set ingredient', () => {
    expect(setIngredient(cards)).toEqual(expectedIngredient);
  });
});
