import { APISlice } from "../API/APISlice";

export const freeConsultationAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    addFreeConsultation: builder.mutation({
      query: (body) => ({
        url: `/api/contact/`,
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useAddFreeConsultationMutation } = freeConsultationAPI;
