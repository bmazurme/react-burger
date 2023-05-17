/* eslint-disable max-len */
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Modal from '../../components/modal';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { getComponents, Urls } from '../../utils';
import { selectIngredient } from '../../store/slices/ingredient-slice';

import style from './ingredient.module.css';

export default function IngredientModal() {
  const [card, setCard] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;
  const cards = useSelector(selectIngredient);

  useLayoutEffect(() => {
    if (cards.length > 0) {
      const ingredient = cards.find((x) => x._id === id);
      const components = getComponents(ingredient) || [];
      setCard({ ingredient, components });
    }
  }, [cards.length]);

  const handleClose = useCallback(() => {
    navigate(location.state || Urls.BASE);
  }, [location.state, navigate]);

  return (
    <Modal
      isOpen
      onClose={handleClose}
      children={(
        <div className={style.main}>
          <div className={`${style.container} pb-20`}>
            <img className={style.image} src={card?.ingredient?.image} alt={card?.ingredient?.name} />
            <p className="text text_type_main-medium pr-25 pl-25 pb-2 pt-6">{card?.ingredient?.name}</p>
            <ul className={`${style.list} pt-8`}>
              {card?.components.map((x) => (
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
      )}
    />
  );
}
