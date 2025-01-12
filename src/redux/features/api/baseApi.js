import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getPostsByID: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});
export const { useGetPostsQuery, useGetPostsByIDQuery } = baseApi;
export default baseApi;
