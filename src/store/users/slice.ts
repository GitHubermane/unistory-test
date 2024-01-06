import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User, UsersState } from 'types';

const initialState: UsersState = {
  users: [],
  user: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<Partial<UsersState>>) => {
      // eslint-disable-next-line no-param-reassign
      state = { ...state, ...action };
    },
    addUsers: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    addYouself: (state, action: PayloadAction<User>) => {
      state.users.unshift(action.payload);
    },
    deleteUser: (state) => {
      state.users.shift();
    },
  },
});

export const {
  addUsers, addYouself, deleteUser, setState, 
} =
  usersSlice.actions;

export default usersSlice.reducer;