/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { userApi } from 'services/user/userApi';
import type { RootState } from 'store/store';

const userRole = ['manager', 'resident', undefined] as const;
export type UserRoles = (typeof userRole)[number];

export type User = {
  loggedIn: boolean;
  status: string;
  error?: string;
  userId?: string;
  name?: string;
  lastName?: string;
  token?: string;
  role: UserRoles;
};

const initialState: User = {
  loggedIn: false,
  status: 'idle',
  error: undefined,
  userId: undefined,
  name: undefined,
  lastName: undefined,
  token: undefined,
  role: 'resident',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserRole: (state, action) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.role = payload.role === 'ROLE_MANAGER' ? 'manager' : 'resident';
      state.token = payload.token;
      state.userId = payload.userId;
    });
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, { payload }) => {
      state.loggedIn = true;
      state.status = 'active';
      state.name = payload.name;
      state.lastName = payload.lastName;
    });
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, (state) => {
      state.loggedIn = false;
      state.userId = undefined;
      state.name = undefined;
      state.lastName = undefined;
      state.token = undefined;
      state.status = 'idle';
    });
  },
});

export const userReducer = UserSlice.reducer;
export const { updateUserRole } = UserSlice.actions;

export const selectUserUserId = (state: RootState) => state.user.userId;
export const selectUserIsLoggedIn = (state: RootState) => state.user.loggedIn;
export const selectUserToken = (state: RootState) => state.user.token;
export const selectUserResponseStatus = (state: RootState) => state.user.status;
export const selectUserResponseError = (state: RootState) => state.user.error;
export const selectUserName = (state: RootState) => state.user.name;
export const selectUserLastName = (state: RootState) => state.user.lastName;
export const selectUserRole = (state: RootState) => state.user.role;
