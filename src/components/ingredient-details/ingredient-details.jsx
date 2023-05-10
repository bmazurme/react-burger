import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import getComponents from '../../utils/get-components';
import { cardPropTypes } from '../../utils/types';

import style from './ingredient-details.module.css';

export default function IngredientDetails({ currentIngredient: ingredient }) {
  const components = getComponents(ingredient);

  return (
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
  );
}

IngredientDetails.propTypes = {
  currentIngredient: cardPropTypes,
};
