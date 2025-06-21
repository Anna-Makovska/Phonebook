
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filters/slice';
import contactsReducer from './contacts/slice';
import authReducer from './auth/slice' 
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistAuthReducer = persistReducer({
  key: 'user-token',
  storage,
  whitelist: ['token'],

},
authReducer,
);




export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);