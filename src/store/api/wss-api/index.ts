import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setOrders } from '../../slices/orders-slice';

export type Channel = 'redux' | 'general';

export interface Message {
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
    getMessages: build.query<Message[], Channel>({
      // query: (channel) => `messages/${channel}`,
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
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket('wss://norma.nomoreparties.space/orders/all');
        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded;

          // when data is received from the socket connection to the server,
          // if it is a message and for the appropriate channel,
          // update our query result with the received message
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);
            // console.log(data, arg);
            // if (data.channel !== arg) return;
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
      // providesTags: ['orders'],
    }),
  }),
});

export const { useGetMessagesQuery } = wssApi;
