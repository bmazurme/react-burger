import { useAppSelector } from './index';

import { selectOrders } from '../store/slices/orders-slice';

export default function useOrder() {
  return useAppSelector(selectOrders);
}
