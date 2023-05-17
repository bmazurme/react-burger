import { userApi } from '../create-api';

const userApiEndpoints = userApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      updateUser: builder.mutation({
        query: (data) => ({
          url: '/auth/user',
          method: 'PATCH',
          body: data,
        }),
      }),
    }),
  });

export const { useUpdateUserMutation } = userApiEndpoints;
