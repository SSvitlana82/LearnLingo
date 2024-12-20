import techersReducer from "./teachers/slice";
import favoriteSlice from "./favorites/slice";
import { filtersReduser } from "./filters/filtersSlice";
import { authReducer } from "./auth/slice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    teachers: techersReducer,
    favorite: favoriteSlice,
    filters: filtersReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  /*  devTools: process.env.NODE_ENV === "development", */
});

export const persistor = persistStore(store);
