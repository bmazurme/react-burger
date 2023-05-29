import React from 'react';

import Orders from '../../components/orders';
import InfoBlock from '../../components/info-block';

// import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';

import style from './queue.module.css';

export default function Queue() {
  return (
    <main className={style.main}>
      <Orders title="Лента заказов" />
      <InfoBlock />
    </main>
  );
}
