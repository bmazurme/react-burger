import React from 'react';

import Preloader from '../../components/preloader';
import ProfileOrders from '../../layers/profile-orders';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';
import withUser from '../../hocs/with-user';

function ProfileOrdersPage() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  // mock...
  const { data = { data: [] }, error, isLoading } = useGetIngredientsQuery();

  return (isLoading ? <Preloader /> : (<ProfileOrders />));
}

export default withUser(ProfileOrdersPage, true);
