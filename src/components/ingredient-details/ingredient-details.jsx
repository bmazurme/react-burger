import React from 'react';
import classNames from 'classnames';

import { cardPropTypes } from '../../utils';

import style from './ingredient-details.module.css';
import PropTypes from "prop-types";

export default function IngredientDetails({ currentIngredient }) {
  const { ingredient, components } = currentIngredient;

  return (
    <div className={classNames(style.container, 'pb-20')}>
      <img className={style.image} src={ingredient?.image} alt={ingredient?.name} />
      <p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">{ingredient?.name}</p>
      <ul className={classNames(style.list, 'pt-8')}>
        {components.map((x) => (
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

const componentPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

IngredientDetails.propTypes = {
  ingredient: cardPropTypes,
  components: PropTypes.arrayOf(componentPropTypes),
};

