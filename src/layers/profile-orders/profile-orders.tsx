import React from 'react';

// import { useAppSelector } from '../../hooks';
// import { selectOrders } from '../../store/slices';
import { useGetMessagesQuery } from '../../store/api';

import Orders from '../../components/orders';

export default function ProfileOrders() {
  const { data = [] } = useGetMessagesQuery('redux'); // custom path !!!

  return (<Orders path />);
}
