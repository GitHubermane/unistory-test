import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User, UserResponse } from 'types';

export const userApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserResponse, { page: number; perPage?: number }>({
      query: ({ page, perPage = 20 }) => `data?page=${page}&perPage=${perPage}`,
    }),
    getUserbyId: builder.query<User, number>({
      query: (id) => `data/id/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserbyIdQuery, useLazyGetUsersQuery } =
  userApi;
