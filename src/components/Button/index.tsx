import type { FC, ReactNode } from 'react';

type PropsType = {
  children: ReactNode | string;
  onClick: () => void;
  isDisabled?: boolean;
};

export const Button: FC<PropsType> = ({ children, isDisabled, onClick }) => {
  const bgColor = isDisabled
    ? 'bg-orange-light/50'
    : 'bg-orange-light hover:bg-orange-dark';
  return (
    <button
      className={`${bgColor} px-6 pt-2 pb-1 rounded-full font-bold text-lg transition-colors`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
