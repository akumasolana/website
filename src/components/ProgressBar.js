import React, { useState, useEffect } from 'react';
import axios from 'axios';
import pbar from '../assets/pbar.png';

function ProgressBar() {
  const [tokenBalance, setTokenBalance] = useState(0);
  useEffect(() => {
    const fetchTokenBalance = async () => {
      try {
        const response = await axios.post(
          'https://docs-demo.solana-mainnet.quiknode.pro/',
          {
            jsonrpc: '2.0',
            id: 1,
            method: 'getBalance',
            params: ['Devb72W6J8nrReXCbLvvf15JGXGG9jmVnsTpZJ1xyPLu'],
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.data && response.data.result) {
          const balance = response.data.result.value/1000000000;
          setTokenBalance(balance);
          console.log('Fetched token balance:', balance);
        }
      } catch (error) {
        console.error('Error fetching token balance:', error);
      }
    };
    fetchTokenBalance();
  }, []);
  const benchmarks = [
    { value: 66, label: 'GANG' },
    { value: 266, label: 'RICH!' },
    { value: 868, label: 'WAGMI' },
    { value: 1666, label: 'MOON' }
  ];
  const calculateProgressPercentage = () => {
    const maxValue = benchmarks[benchmarks.length - 1].value;
    return (tokenBalance / maxValue) * 100;
  };
  return (
    <div className="token-balance-progress-bar">
      <h2>Track the Progress</h2>
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