import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'store/store';
import { BASE_URL } from 'utils/constans';

type ResidentResponse = {
  id: string;
  login: string;
  password: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: 'resident';
  flatId: string;
  owner: boolean;
};

export const residentApi = createApi({
  reducerPath: 'residentApi',
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
    getAllResidents: builder.query<ResidentResponse[], void>({
      query: () => ({
        url: 'member',
        method: 'GET',
      }),
    }),
    getResidentById: builder.query<ResidentResponse, number>({
      query: (id) => ({
        url: `member/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllResidentsQuery, useGetResidentByIdQuery } = residentApi;
