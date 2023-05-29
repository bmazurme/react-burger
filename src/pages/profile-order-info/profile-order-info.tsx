import React from 'react';

import ProfileOrderInfo from '../../layers/profile-order-info';

import withUser from '../../hocs/with-user';

function OrderInfoPage() {
  return (<ProfileOrderInfo />);
}

export default withUser(OrderInfoPage, true);
