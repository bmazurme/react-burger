import { orderApi } from '../create-api';

const userApiEndpoints = orderApi
  .enhanceEndpoints({
    addTagTypes: ['order'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      postOrder: builder.mutation({
        query: (data) => ({
          url: '/orders',
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });

export const { usePostOrderMutation } = userApiEndpoints;
