import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Modal from '../../components/modal';
import IngredientDetails from '../../components/ingredient-details';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import { selectIngredient } from '../../store/slices/ingredient-slice';
import { getComponents, Urls } from '../../utils';

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
      // move to detail
      const components = getComponents(ingredient) || [];
      setCard({ ingredient, components });
    }
  }, [cards.length]);

  const handleClose = useCallback(() => {
    navigate(location.state || Urls.BASE);
  }, [location.state, navigate]);

  return (
    card &&
      <Modal
        isOpen
        onClose={handleClose}
        children={(<IngredientDetails currentIngredient={card} />)}
      />
  );
}
