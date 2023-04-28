/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { managerApi } from 'services/manager/managerApi';
import { userApi } from 'services/user/userApi';
import type { RootState } from 'store/store';

export type Manager = {
  id?: number;
  name?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
};

const initialState: Manager = {
  id: undefined,
  name: undefined,
  lastName: undefined,
  email: undefined,
  phoneNumber: undefined,
};

export const ManagerSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(managerApi.endpoints.getManagerById.matchFulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.name = payload.name;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.phoneNumber = payload.phoneNumber;
    });

    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      state.id = undefined;
      state.name = undefined;
      state.lastName = undefined;
      state.email = undefined;
      state.phoneNumber = undefined;
    });
  },
});

export const managerReducer = ManagerSlice.reducer;

export const selectManagerList = (state: RootState) => state.manager;
