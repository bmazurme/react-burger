import { ingredientApi } from '../create-api';

const ingredientApiEndpoints = ingredientApi
  .enhanceEndpoints({
    addTagTypes: ['ingredient'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getIngredients: builder.query({
        query: () => '/ingredients',
        providesTags: ['ingredient'],
      }),
    }),
  });

export const { useGetIngredientsQuery } = ingredientApiEndpoints;
