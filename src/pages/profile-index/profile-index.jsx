import React from 'react';

import Preloader from '../../components/preloader';
import ProfileIndex from '../../layers/profile-index';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';

export default function ProfileIndexPage() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  const { data = { data: [] }, error, isLoading } = useGetIngredientsQuery();

  return (isLoading ? <Preloader /> : (<ProfileIndex />));
}
