import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import BurgerIngredients from '../../components/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor';
import Preloader from '../../components/preloader';

import useQuery from '../../hooks/use-query';
import { selectIngredient, setIngredient } from '../../store/slices/ingredient-slice';
import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { cardPropTypes } from '../../utils/types';

import style from './main.module.css';

export default function Main() {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [currentBun, setCurrentBun] = useState(null);
  const [sum, setSum] = useState(0);
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  const { data: cards, hasError, isLoading } = useQuery({ url: 'ingredients' });
  

  useEffect(() => {
    dispatch(setIngredient(cards));
    console.log(cards, hasError, isLoading);
  }, [isLoading]);

  useEffect(() => {
    const summ = items.reduce((sumPrice, x) => (sumPrice + x.price), 0);
    const result = summ + (currentBun?.price ? currentBun.price : 0);
    setSum(result);
    console.log(result);
  }, [items.length, currentBun]);

  const data = useSelector(selectIngredient);
  console.log('ingredient', data);

  // preloader
  return (isLoading
    ? <Preloader />
    : (
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <main className={style.main}>
          <BurgerIngredients cards={cards} />
          {(blocks === 2) && (
          <BurgerConstructor
            items={items}
            setItems={setItems}
            currentBun={currentBun}
            setCurrentBun={setCurrentBun}
            sum={sum}
          />
          )}
        </main>
      </DndProvider>
    )
  );
}

Main.protoType = {
  items: PropTypes.arrayOf(cardPropTypes).isRequired,
  setItems: PropTypes.func.isRequired,
  currentBun: cardPropTypes.isRequired,
  setCurrentBun: PropTypes.func.isRequired,
  sum: PropTypes.number.isRequired,
};
