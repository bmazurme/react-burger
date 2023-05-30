import React, { useEffect, type ComponentType } from 'react';

import Preloader from '../components/preloader';

import useIngredient from '../hooks/use-ingredient';

import { useGetIngredientsMutation } from '../store';

export default function withIngredient<P extends Record<string, unknown>>(
  Page: ComponentType<P>,
) {
  return function WithIngredient(pageProps: P & { ingredient?: TypeCard }) {
    let ingredientData = useIngredient();
    const [getIngredients, { isUninitialized, isLoading, isError }] = useGetIngredientsMutation();

    useEffect(() => {
      const getIngredientrData = async () => {
        if (isUninitialized && ingredientData?.length === 0) {
          try {
            const { data } = await getIngredients() as { data: { data: TypeCard[] } };

            if (data) {
              ingredientData = data.data;
            }
          } catch (e) {
            console.log(e);
          }
        }
      };

      getIngredientrData();
    }, [getIngredients, isError, isLoading, isUninitialized, ingredientData]);

    if (isLoading || (isUninitialized && !ingredientData)) {
      return <Preloader />;
    }

    const pagePropsWithUser = { ...pageProps, ingredient: ingredientData };
    pagePropsWithUser.ingredient = ingredientData;

    return <Page {...pagePropsWithUser} />;
  };
}
