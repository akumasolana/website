import React from 'react';
import figLogo from '../assets/Homepage.png';

function Hero() {
  return (
    <section className="hero">
      <img src={figLogo} alt="Akuma Logo" className="hero-logo" />
    </section>
  );
}

export default Hero;