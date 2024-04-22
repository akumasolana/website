import React from 'react';
import dec from '../assets/coinsT.png';
import lat from '../assets/lanterns.png'

function Faq() {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions about Akuma</h2>
      <div className="faq-item">
        <h3>What is Akuma?</h3>
        <p>
            Akuma is a dynamic team from Japan, dedicated to embodying and spreading the essence of Akuma through the Solana blockchain. Our project is inspired by the spirit of Akuma, aiming to blend this powerful concept with innovative technology to make a significant impact within the Solana Blockchain.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is our Mission?</h3>
        <p>
            At Akuma, our mission is multifaceted. We believe that embracing the spirit of an "evil spirit" is a matter of personal choice, but striving to be unparalleled in our field is a unanimous goal. Powered by a community-first approach, we aim to achieve excellence by merging utility with artistic expression, ensuring that every member of our community feels valued and empowered.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is our Vision?</h3>
        <p>
            Our vision is to establish Akuma as a globally recognized brand, deeply rooted in Japanese folklore, yet innovative and forward-thinking. We aspire to create a community-driven platform that not only celebrates cultural heritage but also paves the way for new forms of digital interaction and creativity.        
        </p>
      </div>
      <div className="faq-item">
        <h3>What do we value?</h3>
        <p>
        The core values of Akuma are growth, respect, and commitment. These principles guide our interactions within our community and shape our approach to every project we undertake. We believe in fostering a positive and inclusive environment where every voice is heard and valued.
        </p>
      </div>
      <div className="faq-item">
        <h3>Why Solana?</h3>
        <p>
            Solana was chosen for its low transaction costs, and robust infrastructure, which align perfectly with our vision of offering a seamless and efficient experience to our community.
        </p>
      </div>
      <div className="faq-item">
        <h3>How many founders are there?</h3>
        <p>
            Akuma was brought to life by two visionary founders, <a href="/team">@Sensei</a> and <a href="/team">@jiro</a>. Their combined expertise and passion for Japanese culture and blockchain technology have been instrumental in shaping the project's direction and values.
        </p>
      </div>
      <div className="faq-item">
        <h3>When did we begin?</h3>
        <p>
            Our journey began in August 2023, with the completion of our art. Since then, we've reached several internal milestones that have set the stage for community growth and engagement. We believe now is the opportune moment to develop our community and platform.
        </p>
      </div>
      <div className="faq-item">
        <h3>What is the utility?</h3>
        <p>
            Akuma introduces a unique utility through passive incentives embedded within the gamification of traits, alongside a Unity-developed game. This game, launching post-NFT release, will feature an interactive play-to-earn model, offering an engaging and rewarding experience for our community members.
        </p>
      </div>
      <div className="faq-images">
        <img src={dec} alt="Akuma Coins" className="faq-image faq-image-left" />
        <img src={lat} alt="Lanterns" className="faq-image faq-l-image-right" />
        <img src={dec} alt="Akuma Coins" className="faq-image faq-image-right" />
        <img src={lat} alt="Lanterns" className="faq-image faq-l-image-left" />
      </div>
    </section>
  );
}

export default Faq;