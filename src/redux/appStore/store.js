import { configureStore } from "@reduxjs/toolkit";
import userModeSlice from "../feature/userColorMode/userColorModeSlice";
import userAdmissionProfileSlice from "../feature/userAdmissionProfile/userAdmissionProfileSlice";
import { APISlice } from "../feature/API/APISlice";

export const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    colorMode: userModeSlice,
    admission: userAdmissionProfileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
