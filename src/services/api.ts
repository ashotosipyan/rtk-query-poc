// services/api.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    // Define your endpoints here
    getTodos: builder.query({
      query: () => 'pokemon',
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {useGetTodosQuery} = api;
