/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import Preloader from '../../components/preloader';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { getComponents } from '../../utils';
import { selectIngredient } from '../../store/slices/ingredient-slice';
import { useGetIngredientsMutation } from '../../store';

import style from './ingredient.module.css';

export default function Ingredient() {
  let cards = useSelector(selectIngredient);
  const [getIngredients, { isError, isLoading }] = useGetIngredientsMutation();
  const [card, setCard] = useState(null);
  const { id } = useParams();
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;

  useEffect(() => {
    const getCards = async () => {
      const { data = { data: [] } } = await getIngredients();
      const { data: rawData } = data;
      cards = rawData.map((x) => ({ ...x, thumbnail: x.image, text: x.name }));
    };

    if (cards.length > 0) {
      const ingredient = cards.find((x) => x._id === id);
      const components = getComponents(ingredient) || [];
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
          <img className={style.image} src={card?.ingredient?.image} alt={card?.ingredient?.name} />
          <p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">{card?.ingredient?.name}</p>
          <ul className={classNames(style.list, 'pt-8')}>
            {card?.components.map((x) => (
              <li key={x.id} className={classNames(style.item, 'pr-6 pl-6')}>
                <p className={classNames(style.text, 'text text_type_main-default text_color_inactive pb-2')}>
                  {x.name}
                </p>
                <p className="text text_type_digits-default text_color_inactive">{x.value}</p>
              </li>
            ))}
          </ul>
        </div>
      )
  );
}
