import { APISlice } from "../API/APISlice";

export const employeeAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdvisoryInfo: builder.query({
      query: () => ({
        url: `/api/members/advisory/`,
        method: "GET",
      }),
    }),
    getOperationInfo: builder.query({
      query: () => ({
        url: `/api/members/operation/`,
        method: "GET",
      }),
    }),
    getBranchManagerInfo: builder.query({
      query: () => ({
        url: `/api/members/Manager/`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetAdvisoryInfoQuery,
  useGetOperationInfoQuery,
  useGetBranchManagerInfoQuery,
} = employeeAPI;
