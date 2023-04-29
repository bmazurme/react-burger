import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';

import useQuery from '../../hooks/use-query';
import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { cardPropTypes } from '../../utils/types';

import style from './main.module.css';

export default function Main() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const { data: cards, hasError, isLoading } = useQuery({ url: 'ingredients' });
  useEffect(() => console.log(cards, hasError, isLoading), [isLoading]);
  // preloader

  return (
    <main className={style.main}>
      <BurgerIngredients cards={cards} />
      {(blocks === 2) && <BurgerConstructor cards={cards} />}
    </main>
  );
}

Main.protoType = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
};
