import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from '../store';
import useBurger from './use-burger';
import useUser from './use-user';
import useOrders from './use-orders';
import useIngredient from './use-ingredient';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  useBurger,
  useUser,
  useOrders,
  useIngredient,
};
