import { WelcomePage } from 'pages';
import { UserPage } from 'pages/user';

export const WELCOME_ROUTE = '/welcome';
export const USER_ROUTE = '/user';

export const routes = [
  {
    id: 0,
    path: WELCOME_ROUTE,
    Component: WelcomePage,
  },
  {
    id: 1,
    path: `${USER_ROUTE}/:id`,
    Component: UserPage,
  },
];
