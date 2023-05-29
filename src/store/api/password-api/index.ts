// https://redux-toolkit.js.org/rtk-query/overview
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRetry } from '../base-query';

// Define a service using a base URL and expected endpoints
const passwordApi = createApi({
  reducerPath: 'passwordApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['password'],
  endpoints: () => ({}),
});

export default passwordApi;
