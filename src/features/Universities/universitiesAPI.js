import { APISlice } from "../API/APISlice";

export const universitiesAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getUniversities: builder.query({
      query: () => ({
        url: "/api/universitys",
        method: "GET",
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
   
  }),
});
export const { useGetUniversitiesQuery } = universitiesAPI;
