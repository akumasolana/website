import React from 'react';
import BuyAkuma from '../assets/coinM.jpeg';

function Buy() {
  return (
      <section id="buy" className="buy">
        <h2>Buy Now</h2>
        <a href="https://yourstore.com" target="_blank" rel="noopener noreferrer" className="buy-link">
          <img src={BuyAkuma} alt="Buy Akuma" className="buy-image" />
        </a>
</section>
  );
}

export default Buy;