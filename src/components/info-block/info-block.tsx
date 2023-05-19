import React from 'react';

import List from '../list';
import InfoBlockTotal from '../info-block-total';
import infoBlock from '../../mocks/info-block';

import style from './info-block.module.css';

export default function InfoBlock() {
  return (
    <div className={style.container}>
      <div className={style.frames}>
        <div className={style.done}>
          <List list={infoBlock.backlog} extraClass={style.done_list} title="Готовы:" />
        </div>
        <div className={style.backlog}>
          <List list={infoBlock.done} title="В работе:" />
        </div>
        <div className={style.total}>
          <InfoBlockTotal title="Выполнено за все время:" value={infoBlock.total} />
        </div>
        <div className={style.total_day}>
          <InfoBlockTotal title="Выполнено за сегодня:" value={infoBlock.totalDay} />
        </div>
      </div>
    </div>
  );
}
