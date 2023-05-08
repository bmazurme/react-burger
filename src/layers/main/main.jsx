import React, { useEffect } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';
import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import useQuery from '../../hooks/use-query';

import style from './main.module.css';

export default function Main() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  const { data: rawData, hasError, isLoading } = useQuery({ url: 'ingredients' });
  const cards = rawData.map((x) => ({ ...x, thumbnail: x.image, text: x.name }));

  useEffect(() => {
    console.log(cards, hasError, isLoading);
  }, [isLoading]);

  return (isLoading
    ? <Preloader />
    : (<DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <main className={style.main}>
          <BurgerIngredients cards={cards} />
          {(blocks === 2) && (<BurgerConstructor />)}
        </main>
      </DndProvider>)
  );
}
