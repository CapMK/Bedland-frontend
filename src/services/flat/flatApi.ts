import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Flat from 'store/reducers/flat/flat_slice.types';
import type { RootState } from 'store/store';
import { BASE_URL } from 'utils/constans';

type FlatResponse = Flat;
type FlatRequest = { buildingId: string; flatId: string };
type AllFlatRequest = Omit<FlatRequest, 'flatId'>;

export const flatApi = createApi({
  reducerPath: 'flatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).user;
      if (token) {
        headers.set('authentication', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllFlatsForBuilding: builder.query<FlatResponse[], AllFlatRequest>({
      query: ({ buildingId }) => ({
        url: `flat/${buildingId}`,
        method: 'GET',
      }),
    }),
    getFlatInfo: builder.query<FlatResponse, FlatRequest>({
      query: ({ buildingId, flatId }) => ({
        url: `flat/${buildingId}/${flatId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllFlatsForBuildingQuery, useGetFlatInfoQuery } = flatApi;
