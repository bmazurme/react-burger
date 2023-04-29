import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Groups from '../groups';
import Tabs from '../tabs';
import Modal from '../modal';
import IngredientDetails from '../ingredient-details';

import { cardPropTypes } from '../../utils/types';

import style from './burger-ingredients.module.css';

const groups = [{ id: 'bun', label: 'Булки' }, { id: 'main', label: 'Начинки' }, { id: 'sauce', label: 'Соусы' }];
const tabs = groups.map((x, i) => ({ id: i.toString(), label: x.label }));

export default function BurgerIngredients({ cards }) {
  const [current, setCurrent] = useState('0');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);

  const closePopup = () => {
    setCurrentIngredient(null);
    setIsPopupOpen(false);
  };

  const onClickIngredient = (ingredient) => {
    setCurrentIngredient(ingredient);
    setIsPopupOpen(true);
  };

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
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <Tabs tabs={tabs} current={current} setCurrent={onToggleTab} />
      <Groups groups={groups} cards={cards} onClickIngredient={onClickIngredient} />
      <Modal
        isOpen={isPopupOpen}
        title="Детали ингредиента"
        onClose={closePopup}
        children={<IngredientDetails currentIngredient={currentIngredient} />}
      />
    </section>
  );
}

BurgerIngredients.protoType = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
};
