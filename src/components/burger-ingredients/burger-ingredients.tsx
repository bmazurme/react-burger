import React, { useState } from 'react';

import Tabs from '../tabs';
import Groups from '../groups';

import { MAIN, BUN, SAUCE } from '../../utils';

import style from './burger-ingredients.module.css';

const groups = [{ id: BUN, label: 'Булки' }, { id: MAIN, label: 'Начинки' }, { id: SAUCE, label: 'Соусы' }];
const tabs = groups.map((x, i) => ({ id: i.toString(), label: x.label }));

export default function BurgerIngredients({ cards }: { cards: TypeCard[] }) {
  const [current, setCurrent] = useState('0');
  const onScroll = (id: string) => {
    const element = document.getElementById(id);
    element!.scrollIntoView();
  };

  const onToggleTab = (id: string) => {
    setCurrent(id);
    onScroll(groups[Number(id)].id);
  };

  return (
    <section className={style.main}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <Tabs tabs={tabs} current={current} setCurrent={onToggleTab} />
      <Groups groups={groups} cards={cards} setCurrent={setCurrent} />
    </section>
  );
}
