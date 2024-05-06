import React from 'react';

function Buy() {
  return (
    <section id="buy" className="buy">
      <h2>DexScreener Chart</h2>
      <div className="dexscreener-embed">
        <iframe
          src="https://dexscreener.com/solana/BbTw264achKLYdsFBv6y43V38BuKUBnXasRZKVgpgpqq?embed=1&theme=dark&info=0"
          title="DexScreener Chart"
          width="90%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
}

export default Buy;