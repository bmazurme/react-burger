import React from 'react';
import classNames from 'classnames';

import style from './list.module.css';

export default function List({ list, extraClass }) {
  return (
    <ul className={style.list}>
      {list.map((x) => (
        <li
          key={x}
          className={
          classNames(
            'text text_type_digits-default',
            style.item,
            extraClass,
          )
        }
        >
          {x}
        </li>
      ))}
    </ul>
  );
}
