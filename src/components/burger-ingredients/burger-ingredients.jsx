import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tabs from '../tabs';
import Groups from '../groups';

import {
  MAIN, BUN, SAUCE, cardPropTypes,
} from '../../utils';

import style from './burger-ingredients.module.css';

const groups = [{ id: BUN, label: 'Булки' }, { id: MAIN, label: 'Начинки' }, { id: SAUCE, label: 'Соусы' }];
const tabs = groups.map((x, i) => ({ id: i.toString(), label: x.label }));

export default function BurgerIngredients({ cards }) {
  const [current, setCurrent] = useState('0');
  const onScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  const onToggleTab = (id) => {
    setCurrent(id);
    onScroll(groups[id].id);
  };

  return (
    <section className={style.main}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <Tabs tabs={tabs} current={current} setCurrent={onToggleTab} />
      <Groups groups={groups} cards={cards} setCurrent={setCurrent} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
};
