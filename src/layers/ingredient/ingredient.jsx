import React from 'react';

import Preloader from '../../components/preloader';
import cards from '../../mocks/data';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { useGetIngredientsQuery } from '../../store';
import { getComponents } from '../../utils';

import style from './ingredient.module.css';

export default function Ingredient() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  // Using a query hook automatically fetches data and returns query values
  const { data = { data: [] }, error, isLoading } = useGetIngredientsQuery();
  const { data: rawData } = data;

  const ingredient = cards[0];
  const components = getComponents(ingredient);

  return (isLoading
    ? <Preloader />
    : (
      <div className={style.main}>
        <div className={`${style.container} pb-20`}>
          <img className={`${style.image}`} src={ingredient?.image} alt={ingredient?.name} />
          <p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">{ingredient?.name}</p>
          <ul className={`${style.list} pt-8`}>
            {components.map((x) => (
              <li key={x.id} className={`${style.item} pr-6 pl-6`}>
                <p className={`${style.text} text text_type_main-default text_color_inactive pb-2`}>
                  {x.name}
                </p>
                <p className="text text_type_digits-default text_color_inactive">
                  {x.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));
}
