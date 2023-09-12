import { useAppSelector } from './index';

import { selectBurger } from '../store/slices/burger-slice';

export default function useBurger() {
  return useAppSelector(selectBurger);
}
