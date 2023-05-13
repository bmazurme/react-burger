import React from 'react';

import Content from '../../components/content';
import Ingredient from '../../layers/ingredient';

function IngredientPage() {
  return (<Content header children={<Ingredient />} />);
}
// hoc
export default IngredientPage;
