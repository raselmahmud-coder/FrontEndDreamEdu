import { APISlice } from "../API/APISlice";

export const studentFeedbackAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeedbacks: builder.query({
      query: () => ({
        url: `/api/feedback/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetFeedbacksQuery } = studentFeedbackAPI;
