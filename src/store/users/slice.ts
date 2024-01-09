import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User, UsersState } from 'types';

const initialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersState: (state, action: PayloadAction<Partial<UsersState>>) => ({
      ...state,
      ...action.payload,
    }),

    addUsers: (state, action: PayloadAction<User[]>) => {
      state.users.push(...action.payload);
    },

    addUser: (state, action: PayloadAction<User>) => {
      state.users.unshift(action.payload);
    },

    deleteUser: (state) => {
      state.users.shift();
    },
  },
});

export const {
  addUser, deleteUser, addUsers, setUsersState, 
} =
  usersSlice.actions;

export default usersSlice.reducer;
