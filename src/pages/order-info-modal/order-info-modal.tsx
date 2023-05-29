import React from 'react';

import OrderInfoModal from '../../layers/order-info-modal';

import withUser from '../../hocs/with-user';

function OrderInfoModalPage() {
  return (<OrderInfoModal />);
}

export default withUser(OrderInfoModalPage, false);
