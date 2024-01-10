import type { RootState } from 'store';

export const isExistMyselfSelector = (state: RootState) => {
  const { users } = state.users;
  const myId = state.profile.id;
  return users?.some(({ id }) => id === myId);
};
