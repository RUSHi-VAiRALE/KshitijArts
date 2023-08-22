import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userLogin";
import cartReducer from "./userCart";
import cartPriceReducer from "./productPriceUpdate"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userCart from "./userCart";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)
const persistedCartReducer = persistReducer(persistConfig,cartReducer)

export const store = configureStore({
    reducer:{
        user:persistedReducer,
        cart:persistedCartReducer,
        cartPrice : cartPriceReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
