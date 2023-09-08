import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "../feature/userAuth/userAuthSlice";
import userAdmissionProfileSlice from "../feature/userAdmissionProfile/userAdmissionProfileSlice";
import { APISlice } from "../feature/API/APISlice";

export const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    auth: userAuthSlice,
    admission: userAdmissionProfileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
