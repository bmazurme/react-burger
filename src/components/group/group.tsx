/* eslint-disable max-len */
import React, { RefObject } from 'react';
import classNames from 'classnames';

import Card from '../card';

import style from './group.module.css';

export default function Group({
  id, label, cards, refCurr,
}: { id: string, label: string, cards: TypeCard[], refCurr: RefObject<HTMLLIElement> }) {
  return (
    <li className={style.group} ref={refCurr}>
      <h2 className={classNames(style.title, 'text text_type_main-medium pb-6 pt-6')} id={id}>
        {label}
      </h2>
      <ul className={style.ingredients}>
        {cards.filter((x: TypeCard) => x.type === id).map((card: TypeCard) => <Card key={card._id} {...card} />)}
      </ul>
    </li>
  );
}
