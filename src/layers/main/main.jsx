import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';

import useQuery from '../../hooks/use-query';
import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { cardPropTypes } from '../../utils/types';

import style from './main.module.css';

export default function Main() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  const { data: cards, hasError, isLoading } = useQuery({ url: 'ingredients' });
  useEffect(() => console.log(cards, hasError, isLoading), [isLoading]);
  const [items, setItems] = useState([]);
  // preloader

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <main className={style.main}>
        <BurgerIngredients cards={cards} />
        {(blocks === 2)
        && (
        <BurgerConstructor
          items={items}
          setItems={setItems}
        />
        )}
      </main>
    </DndProvider>
  );
}

Main.protoType = {
  items: PropTypes.arrayOf(cardPropTypes).isRequired,
  setItems: PropTypes.func.isRequired,
};
