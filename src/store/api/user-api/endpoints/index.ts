import userApi from '..';

const userApiEndpoints = userApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      updateUser: builder.mutation<{ user: TypeUser }, Record<string, string>>({
        query: (data) => ({
          url: '/auth/user',
          method: 'PATCH',
          body: data,
        }),
      }),
    }),
  });

export const { useUpdateUserMutation } = userApiEndpoints;
export { userApiEndpoints };
