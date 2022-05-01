import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  // 'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  // 'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
'X-RapidAPI-Key': '848bb5993bmsh2a22d4afd819925p1eb1cfjsn64c3fd8d5864'
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'; 


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  // baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
