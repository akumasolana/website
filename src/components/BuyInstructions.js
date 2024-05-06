import React from 'react';

function BuyInstructions() {
  return (
    <section id="buy-instructions" className="buy-instructions">
      <h2>How to Buy $AKUMA</h2>
      <ol>
        <li>
          <h3>Get Wallet</h3>
          <p>
            To get started, you'll need to set up a Phantom wallet. Click{' '}
            <a href="https://phantom.app/download" target="_blank" rel="noopener noreferrer">
              here
            </a>{' '}
            to download and install the Phantom wallet extension.
          </p>
        </li>
        <li>
          <h3>Get $SOL</h3>
          <p>
            To buy $AKUMA, you'll need to have Solana ($SOL) in your wallet. You can purchase $SOL on various exchanges, such as:
          </p>
          <ul>
            <li>
              <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">
                Binance
              </a>
            </li>
            <li>
              <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer">
                Coinbase
              </a>
            </li>
            <li>
              <a href="https://www.kraken.com" target="_blank" rel="noopener noreferrer">
                Kraken
              </a>
            </li>
          </ul>
          <p>
            Once you have purchased $SOL, transfer it to your Phantom wallet address.
          </p>
        </li>
        <li>
          <h3>Get $AKUMA</h3>
          <p>
            With $SOL in your Phantom wallet, you can now swap it for $AKUMA using the Jupiter Terminal integrated below.
          </p>
        </li>
      </ol>
    </section>
  );
}

export default BuyInstructions;