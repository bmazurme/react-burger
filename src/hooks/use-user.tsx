import { useAppSelector } from './index';

import { selectUser } from '../store/slices';

export default function useUser() {
  return useAppSelector(selectUser);
}
