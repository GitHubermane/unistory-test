import type { Config } from '@usedapp/core';
import { Mainnet, Goerli } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const config: Config = {
  readOnlyChainId: Mainnet.chainId,
};
