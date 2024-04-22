import React from 'react';
import Breakdown from '../assets/breakdown.png';
import Product from '../assets/coinsT.png';

function CoinImage({ left }) {
  const randomTop = Math.random() * 70;
  const randomRotation = Math.random() * 180;
  const randomOffset = Math.random() * 350 - 10;
  const randomScale = Math.random() * 3 + 0.6;

  const coinStyle = {
    position: 'absolute',
    top: `${randomTop}%`,
    transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
    width: '50px',
    height: 'auto',
  };

  if (left) {
    coinStyle.left = `${Math.max(randomOffset, 10)}px`;
    coinStyle.right = 'auto';
  } else {
    coinStyle.right = `${Math.max(randomOffset, 10)}px`;
    coinStyle.left = 'auto';
  }

  return <img src={Product} alt="Coin" style={coinStyle} />;
}

function Economics() {
  const numCoins = 13;
  return (
    <section id="economics" className="economics">
      {/* Render coins on the left side */}
      {Array.from({ length: numCoins }).map((_, index) => (
        <CoinImage key={`left-${index}`} left />
      ))}
      {/* Render coins on the right side */}
      {Array.from({ length: numCoins }).map((_, index) => (
        <CoinImage key={`right-${index}`} />
      ))}
      <img src={Breakdown} alt="Akuma Economics" className="economics-image" />
      <table className="economics-table">
        <tr>
          <td>
            <div className="economics-item">
              <div className="economics-title">TOTAL SUPPLY</div>
              <div className="economics-value">666,000,000</div>
            </div>
          </td>
          <td>
            <div className="economics-item">
              <div className="economics-title">TOTAL LIQUIDITY</div>
              <div className="economics-value">50%</div>
            </div>
          </td>
          <td>
            <div className="economics-item">
              <div className="economics-title">TOTAL PRESALE</div>
              <div className="economics-value">40%</div>
            </div>
          </td>
          <td>
            <div className="economics-item">
              <div className="economics-title">PROJECT DEVELOPMENT</div>
              <div className="economics-value">10%</div>
            </div>
          </td>
        </tr>
      </table>
    </section>
  );
}

export default Economics;