/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  PaymentResponse,
  PaymentStatusInfoResponse,
  PaymentSummaryResponse,
  paymentsApi,
} from 'services/payments/paymentsApi';
import { userApi } from 'services/user/userApi';

const initialSummary: PaymentSummaryResponse[] = [];

const initialPayment: PaymentResponse = {
  id: undefined,
  version: undefined,
  createDate: undefined,
  updateDate: undefined,
  flatId: undefined,
  expirationDate: undefined,
  paymentType: undefined,
  paymentValue: undefined,
  lastPaymentStatus: 'UNPAID',
};

const initialPaymentStatus: PaymentStatusInfoResponse = {
  id: undefined,
  version: undefined,
  createDate: undefined,
  updateDate: undefined,
  paymentId: undefined,
  paymentStatusName: 'UNPAID',
};

const initialPaymentState = {
  paymentsForManager: initialSummary,
  payment: initialPayment,
  paymentStatus: initialPaymentStatus,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: initialPaymentState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      paymentsApi.endpoints.getAllPaymentForManager.matchFulfilled,
      (state, { payload }) => {
        state.paymentsForManager = payload;
      },
    );
    builder.addMatcher(
      paymentsApi.endpoints.getPaymentStatus.matchFulfilled,
      (state, { payload }) => {
        state.paymentStatus.id = payload.id;
        state.paymentStatus.version = payload.version;
        state.paymentStatus.createDate = payload.createDate;
        state.paymentStatus.updateDate = payload.updateDate;
        state.paymentStatus.paymentId = payload.paymentId;
        state.paymentStatus.paymentStatusName = payload.paymentStatusName;
      },
    );
    builder.addMatcher(
      paymentsApi.endpoints.getPaymentInfo.matchFulfilled,
      (state, { payload }) => {
        state.payment.id = payload.id;
        state.payment.version = payload.version;
        state.payment.createDate = payload.createDate;
        state.payment.updateDate = payload.updateDate;
        state.payment.flatId = payload.flatId;
        state.payment.expirationDate = payload.expirationDate;
        state.payment.paymentType = payload.paymentType;
        state.payment.paymentValue = payload.paymentValue;
        state.payment.lastPaymentStatus = payload.lastPaymentStatus;
      },
    );

    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      state.paymentsForManager = initialSummary;
      state.payment = initialPayment;
      state.paymentStatus = initialPaymentStatus;
    });
  },
});
export const paymentReducer = paymentSlice.reducer;
