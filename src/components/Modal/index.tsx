import type { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

export const Modal: FC<PropsType> = ({ children }) => (
  <div className="absolute flex items-center justify-center top-0 left-0 h-full w-full bg-slate-900/80 z-20">
    <div className="px-12 pt-12 pb-11 bg-black">{children}</div>
  </div>
);
