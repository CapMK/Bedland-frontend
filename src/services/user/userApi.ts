import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'store/store';
import {
  LoginResponse,
  ResponseRoles,
  LoginRequest,
  UserResponse,
  UserRequest,
  LogoutResponse,
  LogoutRequest,
} from './userApi.types';

const assignCorrectRole = (role: ResponseRoles) => (role === 'ROLE_MANAGER' ? 'manager' : 'owner');

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const { token } = (getState() as RootState).user;
      headers.set('Content-Type', 'application/json');
      headers.set('Access-Control-Allow-Origin', '*');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (user) => ({
        url: 'http://localhost:8080/auth/authenticate',
        method: 'POST',
        body: JSON.stringify(user),
      }),
    }),
    getUser: builder.mutation<UserResponse, UserRequest>({
      query: (userIdAndRole) => ({
        url: ` http://localhost:8080/${assignCorrectRole(userIdAndRole.role)}/${
          userIdAndRole.userId
        }`,
        method: 'GET',
      }),
    }),

    logout: builder.mutation<LogoutResponse, LogoutRequest>({
      query: (user) => ({
        // waiting for logout
        url: 'localhost:8080/logout',
        method: 'POST',
        body: JSON.stringify(user),
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetUserMutation } = userApi;
