import { userApi } from '../create-api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const userApiEndpoints = userApi
  .enhanceEndpoints({
    addTagTypes: ['user'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      updateUser: builder.mutation({
        query: (data) => {
          const token = localStorage.getItem('accessToken');
          return {
            url: '/auth/user',
            method: 'PATCH',
            headers: {
              Authorization: `token ${token}`,
            },
            body: data,
          };
        },
      }),
    }),
  });

export const {
  useUpdateUserMutation,
} = userApiEndpoints;
