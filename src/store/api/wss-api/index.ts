import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setOrders } from '../../slices/orders-slice';

import { BASE_WSS_PATH } from '../../../utils';

export type Channel = 'user' | 'all';

export interface IOrders {
  success: boolean,
  orders: TypeOrder[],
  total: number,
  totalToday: number,
}

export const wssApi = createApi({
  reducerPath: 'wssApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['orders'],
  endpoints: (build) => ({
    getOrders: build.query<IOrders[], Channel>({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        arg,
        {
          updateCachedData,
          cacheDataLoaded,
          cacheEntryRemoved,
          dispatch,
        },
      ) {
        const accessToken = localStorage.getItem('accessToken');
        const url = arg.toString() === 'all'
          ? `${BASE_WSS_PATH}/${arg}`
          : `${BASE_WSS_PATH}?token=${accessToken}`;
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket(url);

        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded;
          // when data is received from the socket connection to the server,
          // if it is a message and for the appropriate channel,
          // update our query result with the received message
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            dispatch(setOrders(data));
            updateCachedData((draft) => {
              draft.push(data);
            });
          };
          ws.addEventListener('message', listener);
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved;
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close();
      },
    }),
  }),
});

export const { useGetOrdersQuery } = wssApi;
