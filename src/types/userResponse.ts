import type { User } from './user';

export type UserResponse = {
  meta: Meta;
  items: User[];
};

type Meta = {
  currentPage: number;
  perPage: number;
  totalPages: number;
};
