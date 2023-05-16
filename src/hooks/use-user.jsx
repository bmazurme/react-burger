import { useSelector } from 'react-redux';

import { selectUser } from '../store/slices/user-slice';

export default function useUser() {
  const data = useSelector(selectUser);

  return data;
}
