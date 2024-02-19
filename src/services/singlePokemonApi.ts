// services/api.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const singleApi = createApi({
  reducerPath: 'singleApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    // Define your endpoints here
    getSinglePokemon: builder.query({
      query: () => 'pokemon/ditto',
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {useGetSinglePokemonQuery} = singleApi;
