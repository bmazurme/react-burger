import React from 'react';

import Preloader from '../../components/preloader';
import Orders from '../../components/orders';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';

import style from './history.module.css';

export default function History() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  const { data = { data: [] }, error, isLoading } = useGetIngredientsQuery();

  return (isLoading
    ? <Preloader />
    : (
      <main className={style.main}>
        <Orders />
      </main>
    ));
}
