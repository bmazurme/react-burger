import { orderApi } from '../create-api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

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
          headers,
          body: data,
        }),
      }),
    }),
  });

export const { usePostOrderMutation } = userApiEndpoints;
