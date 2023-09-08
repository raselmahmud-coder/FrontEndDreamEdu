import { APISlice } from "../API/APISlice";

export const BlogsAPI = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: `/api/blogs/`,
        method: "GET",
      }),
    }),
    getBlog: builder.query({
      query: ({ id }) => ({
        url: `/api/blogs/${id}/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetBlogsQuery, useGetBlogQuery } = BlogsAPI;
