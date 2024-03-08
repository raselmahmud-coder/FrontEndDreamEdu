import { APISlice } from "../API/APISlice";

export const EventsAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => ({
        url: `/api/events/`,
        method: "GET",
      }),
    }),
    getAnEvent: builder.query({
      query: ({ id }) => ({
        url: `/api/event/${id}/`,
        method: "GET",
      }),
    }),
    addRegistration: builder.mutation({
      query: ({ formData, id }) => ({
        url: `/api/event/${id}/register/`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});
export const {
  useGetEventsQuery,
  useGetAnEventQuery,
  useAddRegistrationMutation,
} = EventsAPI;
