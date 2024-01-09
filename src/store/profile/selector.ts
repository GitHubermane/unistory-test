import type { RootState } from 'store';

export const isRegisteredSelector = (state: RootState) => {
  const { email, name } = state.profile;
  return !!email && !!name;
};
