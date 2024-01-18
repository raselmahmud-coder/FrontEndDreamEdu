import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as contentful from "contentful";
// Contentful Client
const client = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchPosts = createAsyncThunk(
  "contentful/fetchPosts",
  async ({ slug, categoryId, page = 1, limit = 10 } = {}) => {
    console.log(categoryId, "from contentfulSlice");
    let params = {
      content_type: "blogs",
      "fields.slug": slug || "",
      "fields.categories.sys.id": categoryId || "",
      limit, // Number of posts per page
      skip: parseInt(page - 1) * parseInt(limit), // Skip the number of posts from the previous pages
      order: "-sys.createdAt", // Assuming you want to order by creation date
    };
    const response = await client.getEntries(params);
    return {
      items: response.items,
      total: response.total,
      limit: response.limit,
      skip: response.skip,
      page,
    };
  }
);

export const fetchSidebarPosts = createAsyncThunk(
  "contentful/fetchSidebarPosts",
  async ({ limit, currentPostId } = {}) => {
    let params = {
      content_type: "blogs",
      order: "-sys.createdAt",
      limit: limit || 3,
      "sys.id[ne]": currentPostId,
    };
    const response = await client.getEntries(params);
    return response.items;
  },
);

const contentfulSlice = createSlice({
  name: "contentful",
  initialState: {
    posts: [],
    sidebarPosts: [], // Add a new property to hold sidebar posts
    status: "idle", // Initial status should not have the union types directly
    error: null,
  },
  reducers: {
    // Add reducers if needed
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Handle states for the sidebar posts
      .addCase(fetchSidebarPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSidebarPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sidebarPosts = action.payload;
      })
      .addCase(fetchSidebarPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contentfulSlice.reducer;
