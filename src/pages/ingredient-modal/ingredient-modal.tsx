import React from 'react';

import IngredientModal from '../../layers/ingredient-modal';

import withUser from '../../hocs/with-user';

function IngredientModalPage() {
  return (<IngredientModal />);
}

export default withUser(IngredientModalPage, false);
