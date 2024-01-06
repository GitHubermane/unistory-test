import { configureStore } from '@reduxjs/toolkit';
import { userApi } from 'services/user';
import usersReducer from './users/slice';
import profileReducer from './profile/slice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    users: usersReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
