import ingredientApi from '..';

const ingredientApiEndpoints = ingredientApi
  .enhanceEndpoints({
    addTagTypes: ['ingredient'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getIngredients: builder.mutation<{data: TypeCard[]}, void>({
        query: () => ({
          url: 'ingredients',
          method: 'GET',
        }),
        invalidatesTags: ['ingredient'],
      }),
    }),
    overrideExisting: true,
  });

export const { useGetIngredientsMutation } = ingredientApiEndpoints;
export { ingredientApiEndpoints };
