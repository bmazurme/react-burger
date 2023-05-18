import { useSelector } from 'react-redux';

import { selectUser } from '../store/slices/user-slice';

export default function useUser() {
  return useSelector(selectUser);
}
