import { useEthers } from '@usedapp/core';
import { Button } from 'components';
import { useAppDispatch } from 'hooks/redux';
import { useEffect } from 'react';
import { setProfileState } from 'store/profile/slice';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { account, activateBrowserWallet } = useEthers();

  const onConnectWalletClick = () => {
    activateBrowserWallet();
  };

  // Т.к. не был уверен откуда правильнее брать адресс кошелька
  // решил сохранять его в store
  useEffect(() => {
    dispatch(setProfileState({ address: account }));
  }, [account]);

  return (
    <div className="flex justify-between items-center fixed top-0 w-full h-20 px-16 bg-black-dark z-20">
      <div className="flex items-center justify-center h-11 w-48 text-gray-light bg-gray-dark border border-dashed border-gray-light">
        LOGO
      </div>

      {account ? (
        <div className="max-w-36 overflow-hidden text-ellipsis text-orange-light">
          <span className="text-lg whitespace-nowrap">{account}</span>
        </div>
      ) : (
        <Button onClick={onConnectWalletClick}>Connect metamask</Button>
      )}
    </div>
  );
};
