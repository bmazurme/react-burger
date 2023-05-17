import { authApi } from '../create-api';

const authApiEndpoints = authApi
  .enhanceEndpoints({
    addTagTypes: ['auth'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      signUp: builder.mutation({
        query: (data) => ({
          url: '/auth/register',
          method: 'POST',
          body: data,
        }),
      }),
      signIn: builder.mutation({
        query: (body) => ({
          url: '/auth/login',
          method: 'POST',
          body,
        }),
      }),
      signOut: builder.mutation({
        query: (refreshToken) => ({
          url: '/auth/logout',
          method: 'POST',
          body: {
            token: refreshToken,
          },
        }),
      }),
      refreshToken: builder.mutation({
        query: ({ token }) => ({
          url: '/auth/token',
          method: 'POST',
          body: { token },
        }),
      }),
      getUser: builder.mutation({
        query: () => ({
          url: 'auth/user',
          method: 'GET',
        }),
        invalidatesTags: ['user'],
      }),
    }),
  });

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useRefreshTokenMutation,
  useGetUserMutation,
} = authApiEndpoints;
