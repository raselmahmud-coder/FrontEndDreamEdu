import { APISlice } from "../API/APISlice";

export const applyForAdmissionDocs = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    addApplicantProfile: builder.mutation({
      query: (body) =>{
      console.log(body, "hello body");
      return(
        {
        url: "/api/apply/",
        method: "POST",
        body,
      })},
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          // console.log(result,"result from addApplicantProfile");
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useAddApplicantProfileMutation } = applyForAdmissionDocs;
