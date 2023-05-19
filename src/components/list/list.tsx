import React from 'react';
import classNames from 'classnames';

import style from './list.module.css';

export default function List({ list, extraClass, title }
  : { list: string[], extraClass?: string, title: string }) {
  return (
    <>
      {title && <h3 className="text text_type_main-medium mt-10 mb-6">{title}</h3>}
      <ul className={style.list}>
        {list.map((x: string, i: number) => (
          <li
            key={i}
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
    </>
  );
}
