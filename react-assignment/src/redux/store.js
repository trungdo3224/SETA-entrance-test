import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postSlice";
import { postApi } from "./services/postService";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
