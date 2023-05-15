import { passwordApi } from '../create-api';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const authApiEndpoints = passwordApi
  .enhanceEndpoints({
    addTagTypes: ['password'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      passwordForgot: builder.mutation({
        query: (data) => ({
          url: '/password-reset',
          method: 'POST',
          headers,
          body: data,
        }),
      }),
      passwordReset: builder.mutation({
        query: (data) => ({
          url: '/password-reset/reset',
          method: 'POST',
          headers,
          body: data,
        }),
      }),
    }),
  });

export const { usePasswordResetMutation, usePasswordForgotMutation } = authApiEndpoints;
