import { userApi } from '../create-api';

const userApiEndpoints = userApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      updateUser: builder.mutation<Record<string, string>, Record<string, string>>({
        query: (data) => ({
          url: '/auth/user',
          method: 'PATCH',
          body: data,
        }),
      }),
    }),
  });

export const { useUpdateUserMutation } = userApiEndpoints;
