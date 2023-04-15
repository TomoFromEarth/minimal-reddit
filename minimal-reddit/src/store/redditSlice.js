import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts, getPostComments } from "../api/reddit";

const initialState = {
  posts: [],
  hasError: false,
  isLoading: false,
  searchTerm: "",
  selectedSubreddit: "/r/pics/",
};

const redditSlice = createSlice({
  name: "redditPosts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    startGetPosts(state) {
      state.isLoading = true;
      state.hasError = false;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed(state) {
      state.isLoading = false;
      state.hasError = true;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.searchTerm = "";
    },
    toggleShowingComments(state, action) {
      state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
    },
    startGetComments(state, action) {
      state.posts[action.payload].showingComments;
      if (!state.posts[action.payload].showingComments) {
        return;
      }

      state.posts[action.payload].loadingComments = true;
      state.posts[action.payload].hasError = false;
    },
    getCommentsSuccess(state, action) {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    getCommentsFailed(state, action) {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].error = true;
    },
  },
});
