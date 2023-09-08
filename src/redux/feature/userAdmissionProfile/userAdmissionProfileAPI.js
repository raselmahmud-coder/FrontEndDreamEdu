import { APISlice } from "../API/APISlice";
import { login } from "./userAuthSlice";

export const userAdmissionProfileAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    userProfile: builder.mutation({
      query: (body) => ({
        url: "/api/user/profile",
        method: "POST",
        body,
      }),
      // async onQueryStarted(body, { dispatch, queryFulfilled }) {
      //   try {
      //     const result = await queryFulfilled;
      //     localStorage.setItem("auth", JSON.stringify(result.data));
      //     dispatch(login(result.data));
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/api/user/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(body, { dispatch, getState, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          // console.log(result.data.token)
          localStorage.setItem("auth", JSON.stringify(result.data));
          dispatch(login(result.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useUserRegisterMutation, useLoginMutation } = userAdmissionProfileAPI;
