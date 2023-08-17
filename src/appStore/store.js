import { configureStore } from "@reduxjs/toolkit";
import { APISlice } from "../features/API/APISlice";
// import blogPostSlice from "../features/blogPost/blogPostSlice";
import userAuthSlice from "../features/userAuth/userAuthSlice";
import userAdmissionProfileSlice from "../features/userAdmissionProfile/userAdmissionProfileSlice";

export const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    // blogPost: blogPostSlice,
    auth: userAuthSlice,
    admission: userAdmissionProfileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
