// https://redux-toolkit.js.org/rtk-query/overview
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './base-query';

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: baseQuery,
  tagTypes: ['order'],
  endpoints: () => ({}),
});
