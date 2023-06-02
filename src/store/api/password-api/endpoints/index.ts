import passwordApi from '..';

const passwordApiEndpoints = passwordApi
  .enhanceEndpoints({
    addTagTypes: ['password'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      passwordForgot: builder.mutation({
        query: (data) => ({
          url: '/password-reset',
          method: 'POST',
          body: data,
        }),
      }),
      passwordReset: builder.mutation({
        query: (data) => ({
          url: '/password-reset/reset',
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });

export const { usePasswordResetMutation, usePasswordForgotMutation } = passwordApiEndpoints;
export { passwordApiEndpoints };
