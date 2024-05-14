import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pbar from '../assets/pbar.png';

function ProgressBar() {
  const [marketCap, setMarketCap] = useState(0);

  useEffect(() => {
    const fetchMarketCap = async () => {
      try {
        const response = await axios.post(
          'https://docs-demo.solana-mainnet.quiknode.pro/',
          {
            jsonrpc: '2.0',
            id: 1,
            method: 'getTokenSupply',
            params: ['AKUjRM9ZcE8t4mQWGX8ToroNjrTSYvNR3bBfFMzY7ahb'],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data && response.data.result) {
          const supply = response.data.result.value.uiAmountString;
          const price = await fetchTokenPrice();
          const cap = parseFloat(supply) * price;
          setMarketCap(cap);
          console.log('Fetched market cap:', cap);
        }
      } catch (error) {
        console.error('Error fetching market cap:', error);
      }
    };

    const fetchTokenPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.dexscreener.com/latest/dex/pairs/solana/bbtw264achklydsfbv6y43v38bukubnxasrzkvgpgpqq'
        );
        if (response.data && response.data.pair && response.data.pair.priceUsd) {
          return parseFloat(response.data.pair.priceUsd);
        }
      } catch (error) {
        console.error('Error fetching token price:', error);
      }
      return 0;
    };

    fetchMarketCap();
  }, []);
  const benchmarks = [
    { value: 100000, label: 'WAGMI' },
    { value: 200000, label: 'LFG' },
    { value: 300000, label: 'MOON' },
    { value: 600000, label: 'KAMI' },
    { value: 1000000, label: 'NEXT SLERF' },
  ];
  const calculateProgressPercentage = () => {
    const maxValue = benchmarks[benchmarks.length - 1].value;
    return (marketCap / maxValue) * 100;
  };
  return (
    <div className="token-balance-progress-bar">
      <h2>Track the Market Cap</h2>
      <p><a href="https://jup.ag/swap/SOL-AKUjRM9ZcE8t4mQWGX8ToroNjrTSYvNR3bBfFMzY7ahb" target="_blank" rel="noreferrer">CA: AKUjRM9ZcE8t4mQWGX8ToroNjrTSYvNR3bBfFMzY7ahb</a></p>
      <div className="progress-bar-container">
        <div className="progress-bar-bg">
          {benchmarks.map((benchmark) => (
            <div
              key={benchmark.value}
              className="benchmark"
              style={{ left: `${(benchmark.value / benchmarks[benchmarks.length - 1].value) * 100}%` }}
            >
              <div className="benchmark-label">{benchmark.label}</div>
              <div className="benchmark-line"></div>
              <div className="benchmark-value">{benchmark.value}</div>
            </div>
          ))}
        </div>
        <div
          className="progress-bar"
          style={{ width: `${calculateProgressPercentage()}%` }}
        >
          <img src={pbar} alt="Progress" className="progress-image" />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;