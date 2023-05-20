/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Preloader from '../../components/preloader';
import IngredientDetails from '../../components/ingredient-details';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { getComponents } from '../../utils';
import { selectIngredient } from '../../store/slices/ingredient-slice';
import { useGetIngredientsMutation } from '../../store';
import { useAppSelector } from '../../hooks';

export default function Ingredient() {
  let cards = useAppSelector(selectIngredient);
  const [getIngredients, { isError, isLoading }] = useGetIngredientsMutation();
  const [card, setCard] = useState<{ ingredient: TypeCard, components: Record<string, string | number>[] } | null>(null);
  const { id } = useParams();
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;

  useEffect(() => {
    const getCards = async () => {
      // @ts-ignore
      const { data = { data: [] } } = await getIngredients();
      const { data: rawData } = data;
      cards = rawData.map((x: TypeCard) => ({ ...x, thumbnail: x.image, text: x.name }));
    };

    if (cards.length > 0) {
      const ingredient = cards.find((x: TypeCard) => x._id === id);
      // move to detail
      const components = getComponents(ingredient) || [];
      setCard({ ingredient, components });
    } else {
      getCards();
    }
  }, [cards.length]);

  return (isLoading || !card ? <Preloader /> : (<IngredientDetails currentIngredient={card} />));
}
