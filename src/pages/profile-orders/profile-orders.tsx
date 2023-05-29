/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import ProfileOrders from '../../layers/profile-orders';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';

import withUser from '../../hocs/with-user';

function ProfileOrdersPage() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;

  return (<ProfileOrders />);
}

export default withUser(ProfileOrdersPage, true);
