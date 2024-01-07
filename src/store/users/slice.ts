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
    setUsersState: (state, action: PayloadAction<Partial<UsersState>>) =>
      // eslint-disable-next-line no-param-reassign
      ({ ...state, ...action.payload }),

    addUser: (state, action: PayloadAction<User>) => {
      state.users.unshift(action.payload);
    },

    deleteUser: (state) => {
      state.users.shift();
    },
  },
});

export const { addUser, deleteUser, setUsersState } = usersSlice.actions;

export default usersSlice.reducer;
