import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { adsApi } from "./services/adsService";
import adsSlice from "./slices/adsSlice";

export const store = configureStore({
  reducer: {
    ads: adsSlice,
    user: userReducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adsApi.middleware),
});
