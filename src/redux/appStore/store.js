import { configureStore } from "@reduxjs/toolkit";
import userModeSlice from "../feature/userColorMode/userColorModeSlice";
import { APISlice } from "../feature/API/APISlice";
import contentfulSlice from "../feature/ContentfulLib/contentfulSlice";
import userAdmissionProfileSlice from "../feature/applyForAdmission/userAdmissionProfileSlice";

export const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    colorMode: userModeSlice,
    admission: userAdmissionProfileSlice,
    contentful: contentfulSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
