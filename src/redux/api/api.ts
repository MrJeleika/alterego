import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { RootState } from '../app/store'


export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: (headers) => {
      headers.set('Content-type', 'application/json; charset=UTF-8')
      return headers
    },
  }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    fetchNews: builder.query<any, void | null>({
      query: () => {
        return `/posts`
      },
      providesTags: ['News'],
    }),
    deleteNews: builder.mutation<any, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["News"]
    }),
  }),
})

export const {
  useFetchNewsQuery,
  useDeleteNewsMutation,
  
} = apiSlice
