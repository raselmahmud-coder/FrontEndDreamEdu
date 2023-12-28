import { APISlice } from "../API/APISlice";

export const employeeAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeInfo: builder.query({
      query: () => ({
        url: `api/members/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetEmployeeInfoQuery } = employeeAPI;
