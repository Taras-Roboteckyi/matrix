import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import { ItemsSlice } from './items';

////////Store///////////////////
const store = configureStore({
  reducer: {
    matrix: ItemsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
