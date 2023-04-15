import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

const initialState = {
  subreddits: [],
  hasError: false,
  isLoading: false,
};

const subredditSlice = createSlice({
  name: "subreddits",
  initialState,
  reducers: {
    startGetSubreddits(state) {
      state.isLoading = true;
      state.hasError = false;
    },
    getSubredditsSuccess(state, action) {
      state.isLoading = false;
      state.subreddits = action.payload;
    },
    getSubredditsFailed(state) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { startGetSubreddits, getSubredditsSuccess, getSubredditsFailed } = subredditSlice.reducer;

export default subredditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
  try {
    dispatch(startGetSubreddits());

    const subreddits = await getSubreddits();

    dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
    dispatch(getSubredditsFailed());
  }
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
