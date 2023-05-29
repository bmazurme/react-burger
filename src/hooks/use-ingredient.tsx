import { useAppSelector } from './index';

import { selectIngredient } from '../store/slices';

export default function useIngredient() {
  return useAppSelector(selectIngredient);
}
