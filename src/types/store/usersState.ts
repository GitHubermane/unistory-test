import type { User } from 'types';

export type UsersState = {
  users: User[];
  user: User | null;
};
