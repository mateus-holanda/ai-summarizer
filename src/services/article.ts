/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY

interface Params {
  articleUrl: string
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey)
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')

      return headers
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params: Params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=2`
    })
  })
})

export const { useLazyGetSummaryQuery } = articleApi