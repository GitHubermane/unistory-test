import { Header } from 'components';
import type { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => (
  <>
    <Header />
    <div className="mt-20 px-16">{children}</div>
  </>
);
