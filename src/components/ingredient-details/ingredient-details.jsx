import React from 'react';
<<<<<<< Updated upstream

import style from './ingredient-details.module.css';
import img from '../../images/meat.svg';

const props = {
  item: 'Детали ингредиента',
  name: 'Биокотлета из марсианской Магнолии',
  data: [
    { name: 'Калории, ккал', value: 244.4 },
    { name: 'Белки, г', value: 12.2 },
    { name: 'Жиры, г', value: 17.2 },
    { name: 'Углеводы, г', value: 10.2 },
  ]
};

export default function IngredientDetails() {
  return (
		<div className={`${style.container} pb-20`}>
			<img className={`${style.image}`} src={img} alt={props.name} />
			<p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">
        {props.name}
      </p>
			<ul className={`${style.list} pt-8`}>
        {props.data.map((x, i) => (
=======
import PropTypes from 'prop-types';

import getComponents from '../../utils/get-components';

import style from './ingredient-details.module.css';

export default function IngredientDetails({ currentIngredient: ingredient }) {
  const components = getComponents(ingredient);

  return (
		<div className={`${style.container} pb-20`}>
			<img className={`${style.image}`} src={ingredient.image} alt={ingredient.name} />
			<p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">{ingredient.name}</p>
			<ul className={`${style.list} pt-8`}>
        {components.map((x, i) => (
>>>>>>> Stashed changes
          <li key={i} className={`${style.item} pr-6 pl-6`}>
            <p className={`${style.text} text text_type_main-default text_color_inactive pb-2`}>
              {x.name}
            </p>
<<<<<<< Updated upstream
            <p className="text text_type_digits-default text_color_inactive">
              {x.value}
            </p>
=======
            <p className="text text_type_digits-default text_color_inactive">{x.value}</p>
>>>>>>> Stashed changes
          </li>
        ))}
			</ul>
		</div>
  );
}
<<<<<<< Updated upstream
=======

IngredientDetails.protoType = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	calories: PropTypes.number.isRequired,
	proteins: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
}
>>>>>>> Stashed changes
