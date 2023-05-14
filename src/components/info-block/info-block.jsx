import React from 'react';
import classNames from 'classnames';

import List from '../list';

import style from './info-block.module.css';

const backlog = ['034530', '034531', '034532', '034533', '034533', '034533', '034533', '034533', '034533', '034533', '034533', '034533', '034533', '034533', '034533'];
const done = ['034538', '034538', '034538', '034538', '034538', '034538', '034538', '034538', '034538', '034538', '034538'];

export default function InfoBlock() {
  return (
    <div className={style.container}>
      <div className={style.frames}>
        <div className={style.done}>
          <h3 className="text text_type_main-medium mt-10 mb-6">Готовы:</h3>
          <List list={backlog} extraClass={style.done_list} />
        </div>
        <div className={style.backlog}>
          <h3 className="text text_type_main-medium mt-10 mb-6">В работе:</h3>
          <List list={done} />
        </div>
        <div className={style.total}>
          <h3 className="text text_type_main-medium mt-15 mb-2">Выполнено за все время:</h3>
          <h2 className={classNames('text text_type_digits-large', style.shadow)}>28 752</h2>
        </div>
        <div className={style.total_day}>
          <h3 className="text text_type_main-medium mt-15 mb-2">Выполнено за сегодня:</h3>
          <h2 className={classNames('text text_type_digits-large', style.shadow)}>138</h2>
        </div>
      </div>
    </div>
  );
}
