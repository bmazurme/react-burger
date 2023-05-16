import { authApi } from '../create-api';

const refreshToken = localStorage.getItem('refreshToken');
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
        query: (body) => ({
          url: '/auth/login',
          method: 'POST',
          headers,
          body,
        }),
      }),
      signOut: builder.mutation({
        query: () => ({
          url: '/auth/logout',
          method: 'POST',
          headers,
          body: {
            token: refreshToken,
          },
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
      getUser: builder.mutation({
        query: () => {
          const token = localStorage.getItem('accessToken');

          return {
            url: 'auth/user',
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        },
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
