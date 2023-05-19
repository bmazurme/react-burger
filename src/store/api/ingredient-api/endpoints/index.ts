import { ingredientApi } from '../create-api';

const ingredientApiEndpoints = ingredientApi
  .enhanceEndpoints({
    addTagTypes: ['ingredient'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getIngredients: builder.mutation({
        query: () => ({
          url: 'ingredients',
          method: 'GET',
        }),

        // @ts-ignore
        providesTags: ['ingredient'],
      }),
    }),
  });

export const { useGetIngredientsMutation } = ingredientApiEndpoints;
