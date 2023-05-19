import React from 'react';

import Content from '../../components/content';
import Ingredient from '../../layers/ingredient';

import withUser from '../../hocs/with-user';

function IngredientPage() {
  return (<Content header children={<Ingredient />} />);
}

export default withUser(IngredientPage, false);
