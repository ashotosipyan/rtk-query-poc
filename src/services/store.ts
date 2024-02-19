import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import {api} from './api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // Add other reducers here if needed
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

// Export the RootState and AppDispatch types for use in other files
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
