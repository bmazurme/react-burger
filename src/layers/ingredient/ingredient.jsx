import React from 'react';

import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';

import style from './ingredient.module.css';

export default function Ingredient() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  const { data = { data: [] }, error, isLoading } = useGetIngredientsQuery();
  const { data: rawData } = data;
  const cards = rawData.map((x) => ({ ...x, thumbnail: x.image, text: x.name }));

  return (isLoading ? <Preloader /> : <>data</>);
}
