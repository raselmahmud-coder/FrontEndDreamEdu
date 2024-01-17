import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as contentful from "contentful";

const initialState = {
  posts: [],
  status: "idle" | "loading" | "succeeded" | "failed",
  error: null,
};

// Contentful Client
const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchPosts = createAsyncThunk(
  "contentful/fetchPosts",
  async (arg = null) => {
    const { slug } = arg || {};
    // console.log(arg, "hello argument");
    const response = await client.getEntries({
      content_type: "blogs",
      "fields.slug": slug || "",
      //   limit: 1,
    });
    return response.items;
  },
);

const contentfulSlice = createSlice({
  name: "contentful",
  initialState,
  reducers: {
    // Add reducers if needed
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contentfulSlice.reducer;
