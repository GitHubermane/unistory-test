import { Header } from 'components';
import type { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => (
  <div>
    <Header />
    <div className="px-16">{children}</div>
  </div>
);
