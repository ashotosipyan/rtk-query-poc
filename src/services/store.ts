import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {api} from './api';
import {singleApi} from './singlePokemonApi.ts';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [singleApi.reducerPath]: singleApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware, singleApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

// Export the RootState and AppDispatch types for use in other files
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
