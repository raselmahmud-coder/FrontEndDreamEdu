import { APISlice } from "../API/APISlice";

export const BlogsAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: `/api/contact/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetBlogsQuery } = BlogsAPI;
