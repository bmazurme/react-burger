import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';

import useQuery from '../../hooks/use-query';
import { cardPropTypes } from '../../utils/types';

import style from './main.module.css';

export default function Main() {
  const { data: cards, hasError, isLoading } = useQuery({ url: 'ingredients' });
  useEffect(() => console.log(cards, hasError, isLoading), [isLoading]);
  // preloader
  // modal-error

  return (
    <main className={style.main}>
      <BurgerIngredients cards={cards} />
      <BurgerConstructor cards={cards} />
    </main>
  );
}

Main.protoType = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
}
