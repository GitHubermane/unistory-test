import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice';
import profileReducer from './profile/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
