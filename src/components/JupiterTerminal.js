import React, { useEffect, useState } from 'react';
import { useUnifiedWalletContext, useWallet } from '@jup-ag/wallet-adapter';

const JupiterTerminal = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const passthroughWalletContextState = useWallet();
  const { setShowModal } = useUnifiedWalletContext();

  const rpcUrl = 'https://api.mainnet-beta.solana.com/';
  const formProps = {
    fixedOutputMint: true,
    fixedInputMint: true,
    initialOutputMint: "AKUjRM9ZcE8t4mQWGX8ToroNjrTSYvNR3bBfFMzY7ahb",
    initialInputMint: "So11111111111111111111111111111111111111112",
  };
  const simulateWalletPassthrough = true;
  const strictTokenList = true;
  const defaultExplorer = 'Solscan';
  const useUserSlippage = true;

  const launchTerminal = async () => {
    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: rpcUrl,
      formProps,
      enableWalletPassthrough: simulateWalletPassthrough,
      passthroughWalletContextState: simulateWalletPassthrough ? passthroughWalletContextState : undefined,
      onRequestConnectWallet: () => setShowModal(true),
      strictTokenList,
      defaultExplorer,
      useUserSlippage,
    });
  };

  useEffect(() => {
    let intervalId = undefined;

    if (!isLoaded || !window.Jupiter.init) {
      intervalId = setInterval(() => {
        setIsLoaded(Boolean(window.Jupiter.init));
      }, 500);
    }

    if (intervalId) {
      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isLoaded && Boolean(window.Jupiter.init)) {
        launchTerminal();
      }
    }, 200);
  }, [isLoaded, simulateWalletPassthrough]);

  useEffect(() => {
    if (!window.Jupiter.syncProps) return;
    window.Jupiter.syncProps({ passthroughWalletContextState });
  }, [passthroughWalletContextState]);

  return (
    <div className="min-h-[600px] h-[600px] w-full rounded-2xl text-white flex flex-col items-center p-2 lg:p-4 mb-4 overflow-hidden mt-9">
      <div className="flex flex-col lg:flex-row h-full w-full overflow-auto">
        <div className="w-full h-full rounded-xl overflow-hidden flex justify-center">
          {!isLoaded ? (
            <div className="h-full w-full animate-pulse bg-white/10 mt-4 lg:mt-0 lg:ml-4 flex items-center justify-center rounded-xl">
              <p className="">Loading...</p>
            </div>
          ) : null}
          <div
            id="integrated-terminal"
            className={`flex h-full w-full max-w-[384px] overflow-auto justify-center bg-[#282830] rounded-xl ${
              !isLoaded ? 'hidden' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default JupiterTerminal;