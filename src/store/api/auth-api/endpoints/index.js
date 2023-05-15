import { authApi } from '../create-api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

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
          headers,
          body: data,
        }),
      }),
      signIn: builder.mutation({
        query: (data) => ({
          url: '/auth/login',
          method: 'POST',
          headers,
          body: data,
        }),
      }),
      signOut: builder.mutation({
        query: (data) => ({
          url: '/auth/logout',
          method: 'POST',
          headers,
          body: data,
        }),
      }),
      refreshToken: builder.mutation({
        query: (data) => ({
          url: '/auth/token',
          method: 'POST',
          headers,
          body: data,
        }),
      }),
    }),
  });

export const {
  useSignUpMutation,
  useSignInMutation,
  useSignOutMutation,
  useRefreshTokenMutation,
} = authApiEndpoints;
