import React from 'react';
import BuyAkuma from '../assets/coinM.jpeg';

function Buy() {
  return (
      <section id="buy" className="buy">
        <h2>Buy Now</h2>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/BbTw264achKLYdsFBv6y43V38BuKUBnXasRZKVgpgpqq?t=1714916106297" target="_blank" rel="noopener noreferrer" className="buy-link">
          <img src={BuyAkuma} alt="Buy Akuma" className="buy-image" />
        </a>
</section>
  );
}

export default Buy;
