import React from 'react';

import Groups from '../groups';
import Tabs from '../tabs';

import style from './burger-ingredients.module.css';

const groups = [{ id: 'bun', label: 'Булки' }, { id: 'main', label: 'Начинки' }, { id: 'sauce', label: 'Соусы' }];
const tabs = groups.map((x, i) => ({ id: i.toString(), label: x.label }));

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState('0');

  const onScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  const onToggleTab = (id) => {
    setCurrent(id);
    onScroll(groups[id].id);
  };

  return (
    <section className={`${style.main}`}>
      <h2 className={`text text_type_main-large`}>Соберите бургер</h2>
      <Tabs tabs={tabs} current={current} setCurrent={onToggleTab} />
      <Groups groups={groups} />
    </section>
  );
}
