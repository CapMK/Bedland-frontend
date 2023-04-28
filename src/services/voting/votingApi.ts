import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'utils/constans';

export type Voting = {
  id: number;
  version: number;
  createDate: Date;
  updateDate: Date;
  expirationDate: Date;
  buildingId: number;
  title: string;
  description: string;
};

export type VotingResponse = {
  id: number;
  version: number;
  createDate: Date;
  updateDate: Date;
  flatID: number;
  votingOptionId: number;
};

export type VotingDetail = { votingOptionTitle: string; amountOfResponses: number };

export const votingApi = createApi({
  reducerPath: 'votingApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getVotingsForResident: builder.query<Voting[], string>({
      query: (residentId: string) => ({
        url: `voting/${residentId}`,
        method: 'GET',
      }),
    }),

    getVotingsSummaryForManager: builder.query<Voting[], string>({
      query: (managerId: string) => ({
        url: `voting_summary/${managerId}`,
        method: 'GET',
      }),
    }),

    getVotingDetails: builder.query<VotingDetail[], string>({
      query: (votingId: string) => ({
        url: `voting_detail/${votingId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetVotingsForResidentQuery,
  useGetVotingsSummaryForManagerQuery,
  useGetVotingDetailsQuery,
} = votingApi;
