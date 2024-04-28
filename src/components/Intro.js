import React from 'react';
import Coin from '../assets/coinsT.png';
import bgVideo from '../assets/CircVid.mp4';
import Lantern from '../assets/lanterns.png';


function Intro() {
  return (
    <section id="intro" className="intro">
      <h2>What is Akuma</h2>
      <div className="intro-text">
        <p>Akuma is a dynamic team from Japan, dedicated to embodying and spreading</p>
        <p>the essence of Akuma through the Solana blockchain. Our project is inspired by the spirit of Akuma,</p>
        <p>aiming to blend this powerful concept with innovative technologyt</p>
        <p>to make a significant impac within the Solana Blockchain.<span className="quote">And we emerge from the shadows...</span></p>
      </div>
      <video src={bgVideo} autoPlay loop muted playsInline className="soap-image" />
      <img src={Coin} alt="Akuma Coin" className="intro-image" />
      <img src={Lantern} alt="Lantern" className="intro-l-image" />
    </section>
  );
}

export default Intro;