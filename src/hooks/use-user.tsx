import { useAppSelector } from './index';

import { selectUser } from '../store/slices/user-slice';

export default function useUser() {
  return useAppSelector(selectUser);
}
