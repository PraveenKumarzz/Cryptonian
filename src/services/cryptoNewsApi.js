import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '436f7da212msh1b0fd43b6309d16p161ceejsna63da1034408',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl = '';

  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com'}),
    endpoints: (builder) => ({
       getCryptoNews: builder.query({
           query: ({newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
       })
    })
}); 

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;