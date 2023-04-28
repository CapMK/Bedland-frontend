import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'store/store';
import { BASE_URL } from 'utils/constans';

type PaymentType = 'RENT' | 'MEDIA' | 'ELECTRICITY_BILL';
type PaymentStatus = 'UNPAID' | 'PAID' | 'EXPIRED';

export type PaymentSummaryResponse = {
  paymentStatusName: PaymentStatus;
  amountOfPayments: number;
};

export type PaymentResponse = {
  id?: number;
  version?: number;
  createDate?: Date;
  updateDate?: Date;
  flatId?: number;
  expirationDate?: Date;
  paymentType?: PaymentType;
  paymentValue?: number;
  lastPaymentStatus: PaymentStatus;
};

export type PaymentStatusInfoResponse = {
  id?: number;
  version?: number;
  createDate?: Date;
  updateDate?: Date;
  paymentId?: number;
  paymentStatusName?: PaymentStatus;
};

export const paymentsApi = createApi({
  reducerPath: 'paymentsApi',
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
    getAllPaymentForManager: builder.query<PaymentSummaryResponse[], number>({
      query: (managerId) => ({
        url: `payments_summary/${managerId}`,
        method: 'GET',
      }),
    }),
    getPaymentStatus: builder.query<PaymentStatusInfoResponse, number>({
      query: (paymentId) => ({
        url: `payment-status/${paymentId}`,
        method: 'GET',
      }),
    }),
    getPaymentInfo: builder.query<PaymentResponse, number>({
      query: (paymentId) => ({
        url: `payment/${paymentId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllPaymentForManagerQuery, useGetPaymentInfoQuery } = paymentsApi;
