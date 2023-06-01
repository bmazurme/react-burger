/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, test } from '@jest/globals';

import {
  setBun,
  setItems,
  setNumber,
  setMainOrSauce,
  removeIngredient,
} from './burger-slice';

import cards from '../../mocks/data';

const expectedBun = {
  payload: cards[0],
  type: 'burger/setBun',
};

const expectedItems = {
  payload: cards,
  type: 'burger/setItems',
};

const expectedNumber = {
  payload: 152,
  type: 'burger/setNumber',
};

const expectedRemove = {
  payload: 0,
  type: 'burger/removeIngredient',
};

const expectedMainOrSauce = {
  payload: cards[2],
  type: 'burger/setMainOrSauce',
};

describe('constructor', () => {
  test('set bun to constructor', () => {
    expect(setBun(cards[0])).toEqual(expectedBun);
  });

  test('set items', () => {
    expect(setItems(cards)).toEqual(expectedItems);
  });

  test('remove item', () => {
    expect(removeIngredient(0)).toEqual(expectedRemove);
  });

  test('set number', () => {
    expect(setNumber(152)).toEqual(expectedNumber);
  });

  test('set main', () => {
    expect(setMainOrSauce(cards[2])).toEqual(expectedMainOrSauce);
  });
});
