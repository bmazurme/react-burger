import { userApi } from '../create-api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const userApiEndpoints = userApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUser: builder.query({
        query: () => '/auth/user',
        providesTags: ['user'],
      }),
      updateUser: builder.mutation({
        query: (data) => ({
          url: '/auth/user',
          method: 'PATCH',
          headers,
          body: data,
        }),
      }),
    }),
  });

export const { useGetUserQuery, useUpdateUserMutation } = userApiEndpoints;
