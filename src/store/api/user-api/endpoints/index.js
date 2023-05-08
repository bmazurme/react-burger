import { userApi } from '../create-api';

const userApiEndpoints = userApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUser: builder.query({
        query: () => '/user',
        providesTags: ['user'],
      }),
    }),
  });

export const { useGetUserQuery } = userApiEndpoints;
