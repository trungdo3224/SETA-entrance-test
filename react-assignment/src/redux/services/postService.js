import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rootUrl = `https://jsonplaceholder.typicode.com/posts`;

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: rootUrl,
  }),
  endpoints: (builder) => ({
    
    fetchPosts: builder.query({
      query: () => "",
    }),

  }),

});

export const { useFetchPostsQuery } = postApi;
