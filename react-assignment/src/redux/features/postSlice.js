import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsList: [],
  isLoading: true,
  isError: false,
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.postsList = action.payload;
    },
    addPost: (state, action) => {
      state.postsList.unshift(action.payload);
    },
  },
});

export const { getPosts, addPost } = postSlice.actions;

export default postSlice.reducer;
