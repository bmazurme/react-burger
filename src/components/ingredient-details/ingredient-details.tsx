/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';

import style from './ingredient-details.module.css';

export default function IngredientDetails({ currentIngredient }
  : { currentIngredient: { ingredient: TypeCard, components: Record<string, string | number>[] } }) {
  const { ingredient, components } = currentIngredient;

  return (
    <div className={classNames(style.container, 'pb-20')}>
      <img className={style.image} src={ingredient?.image} alt={ingredient?.name} />
      <p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">{ingredient?.name}</p>
      <ul className={classNames(style.list, 'pt-8')}>
        {components.map((x: Record<string, string | number>) => (
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
  );
}
