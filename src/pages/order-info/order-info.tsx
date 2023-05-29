import React from 'react';

import Content from '../../components/content';
import OrderInfo from '../../layers/order-info';

function OrderInfoPage() {
  return (<Content header children={<OrderInfo />} />);
}

export default OrderInfoPage;
