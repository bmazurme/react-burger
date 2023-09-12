import React from 'react';

import List from '../list';
import InfoBlockTotal from '../info-block-total';

import { useOrders } from '../../hooks';

import style from './info-block.module.css';

export default function InfoBlock() {
  const { orders = [], total = 0, totalToday = 0 } = useOrders();
  const done = orders.filter((x) => x.status === 'done').map((x) => (x.number.toString()));
  const backlog = orders.filter((x) => x.status !== 'done').map((x) => (x.number.toString()));

  return (
    <div className={style.container}>
      <div className={style.frames}>
        <div className={style.done}>
          <List list={done} extraClass={style.done_list} title="Готовы:" />
        </div>
        <div className={style.backlog}>
          <List list={backlog} title="В работе:" />
        </div>
        <div className={style.total}>
          <InfoBlockTotal title="Выполнено за все время:" value={total} />
        </div>
        <div className={style.total_day}>
          <InfoBlockTotal title="Выполнено за сегодня:" value={totalToday} />
        </div>
      </div>
    </div>
  );
}
