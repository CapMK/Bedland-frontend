import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'store/store';
import { Building } from 'types/shared.types';
import { BASE_URL } from 'utils/constans';

type GetBuildingRequest = {
  managerId: string;
  buildingId: string;
};

export const buildingsApi = createApi({
  reducerPath: 'buildingsApi',
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
    getBuildingById: builder.query<Building, GetBuildingRequest>({
      query: ({ managerId, buildingId }) => ({
        url: `/buildings/${managerId}/${buildingId}`,
        method: 'GET',
      }),
    }),
    getAllBuildingsByManager: builder.query<Building[], GetBuildingRequest>({
      query: ({ managerId }) => ({
        url: `/buildings/${managerId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllBuildingsByManagerQuery, useGetBuildingByIdQuery } = buildingsApi;
