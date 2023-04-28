import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'store/store';
import { BASE_URL } from 'utils/constans';

type ManagerResponse = {
  id: number;
  version: number;
  createDate: Date;
  updateDate: Date;
  login: string;
  password: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export const managerApi = createApi({
  reducerPath: 'managerApi',
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
    getManagerById: builder.query<ManagerResponse, number>({
      query: (id) => ({
        url: `manager/:${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetManagerByIdQuery } = managerApi;
