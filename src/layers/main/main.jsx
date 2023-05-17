import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';
import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsMutation } from '../../store';
import { selectIngredient } from '../../store/slices/ingredient-slice';

import style from './main.module.css';

export default function Main() {
  let cards = useSelector(selectIngredient);

  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  const [getIngredients, { isError, isLoading }] = useGetIngredientsMutation();

  useEffect(() => {
    const getCards = async () => {
      const { data = { data: [] } } = await getIngredients();
      const { data: rawData } = data;
      cards = rawData.map((x) => ({ ...x, thumbnail: x.image, text: x.name }));
    };

    if (cards.length < 1) {
      getCards();
    }
  }, [isLoading]);

  return (isLoading
    ? <Preloader />
    : (
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <main className={style.main}>
          <BurgerIngredients cards={cards} />
          {(blocks === 2) && (<BurgerConstructor />)}
        </main>
      </DndProvider>
    )
  );
}
