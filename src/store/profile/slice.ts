import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { ProfileState } from 'types';

const initialState: Readonly<ProfileState> = {
  id: null,
  name: null,
  email: null,
  address: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileState: (state, action: PayloadAction<Partial<ProfileState>>) =>
      // eslint-disable-next-line no-param-reassign
      ({ ...state, ...action.payload }),
  },
});

export const { setProfileState } = profileSlice.actions;

export default profileSlice.reducer;
