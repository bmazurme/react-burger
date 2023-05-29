import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import Preloader from '../preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useAppSelector } from '../../hooks';
import { selectIngredient } from '../../store/slices';
import { useGetIngredientsMutation } from '../../store';

import { getComponents } from '../../utils';

import style from './ingredient-details.module.css';

type TypeBox = { ingredient: TypeCard, components: Record<string, string | number>[] } | null;

export default function IngredientDetails() {
  let cards = useAppSelector(selectIngredient);
  const [getIngredients, { isLoading }] = useGetIngredientsMutation();
  const [card, setCard] = useState<TypeBox>(null);
  const { id } = useParams();
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;

  useEffect(() => {
    const getCards = async () => {
      const { data = { data: [] } } = await getIngredients() as { data: { data: TypeCard[] } };
      const { data: rawData } = data;
      cards = rawData.map((x: TypeCard) => ({ ...x, thumbnail: x.image, text: x.name }));
    };

    if (cards.length > 0) {
      const ingredient = cards.find((x: TypeCard) => x._id === id)!;
      const {
        proteins, carbohydrates, calories, fat,
      } = ingredient;
      const components = getComponents({
        proteins, carbohydrates, calories, fat,
      }) || [];
      setCard({ ingredient, components });
    } else {
      getCards();
    }
  }, [cards.length]);

  return (
    isLoading
      ? <Preloader />
      : (
        <div className={classNames(style.container, 'pb-20')}>
          <img className={style.image} src={card?.ingredient.image} alt={card?.ingredient.name} />
          <p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">{card?.ingredient.name}</p>
          <ul className={classNames(style.list, 'pt-8')}>
            {card?.components.map((x: Record<string, string | number>) => (
              <li key={x.id} className={classNames(style.item, 'pr-6 pl-6')}>
                <p className={classNames(style.text, 'text text_type_main-default text_color_inactive pb-2')}>
                  {x.name}
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {x.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )
  );
}
