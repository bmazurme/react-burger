import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import CardGroups from '../card-group';

import categories from '../../mocks/data';

import style from './burger-ingredients.module.css';

const tabs = [{ id: 0, label: 'Булки' }, { id: 1, label: 'Соусы' }, { id: 2, label: 'Начинки' }];
const groups = [{ id: 'bun', label: 'Булки' }, { id: 'main', label: 'Начинки' }, { id: 'sauce', label: 'Соусы' }];

function BurgerIngredients() {
  const [current, setCurrent] = React.useState(0);

  return (
    <section className={`${style.main}`}>
      <h2 className={`text text_type_main-large`}>Соберите бургер</h2>
      <div style={{ display: 'flex', marginTop: 20 }}>
        {tabs.map(({ id, label }, i) => (
          <Tab
            key={i}
            value={id}
            active={current === id}
            onClick={() => setCurrent(id)}
          >
            {label}
          </Tab>
        ))}
      </div>
      <ul className={style.cards}>
        {groups.map(({ id, label }, i) => (
          <CardGroups
            id={id}
            label={label}
            cards={categories}
            key={i}
          />
        ))}
      </ul>
    </section>
  );
}

export default BurgerIngredients;
