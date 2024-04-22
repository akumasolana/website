import React, { useState } from 'react';
import StoryImage from '../assets/coinsT.png';
import Lanterns from '../assets/lanterns.png';

function Story() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const renderStoryContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <p>
                ♰ PT:1
            </p>
            <p>
                In the neon-lit digital expanse of Tokyo, the Akuma emerges, blending the realms of art and gaming within a gamified Unity game. Here, NFTs carry the essence of their creators, intertwining with the narrative of Jiro, a young ninja, and his mentor, Sensei. Their story begins with an ominous discovery: a gem radiating a malevolent red glow, speckled with purple streaks that hint at the Solana blockchain's influence. This gem, infused with the spirit of Akuma—the ancient demon—whispers of untold power and secrets.
            </p>
            <p>
                Sensei, wise and burdened with ancient knowledge, recognizes the gem's danger and its corruptive potential, while the purple signifies Solana's promise for freedom and creativity. The duo embarks on a quest to the Akuma Shrine, aiming to seal away the gem's evil. Their journey is perilous, marked by encounters with digital demons and the challenge of navigating the blockchain's depths.
            </p>
            <p>
                The gem tests their resolve and the strength of their bond, drawing them into battles and alliances with other warriors and digital beings. Their adventure transcends the game, becoming a saga that resonates across the digital realm, inspiring players to join their quest.
            </p>
            <p>
                Jiro and Sensei's tale, set against the backdrop of the Akuma, becomes a narrative of adventure, unity, and the struggle between light and darkness. Their journey through the heart of this gamified world illustrates the potential of NFTs to tell stories and engage communities, making every participant a part of the unfolding legend.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <p>
                ♰ PT:2
            </p>
            <p>
                On their second day, Sensei and Jiro journeyed to an ancient shrine in Kyoto, utilizing their ninja speed to traverse the distance in mere minutes. This shrine, hidden from ordinary sight, was key to their quest against the menacing gem. Unlike ordinary gems they had neutralized before, this one required a more profound approach to seal away its evil. The key to its containment lay in three ancient letters: あ (a), く (ku), ま (ma), symbols that held the power to unlock a sacred ritual capable of conquering the gem's malevolence.
            </p>
            <p>
                Sensei, with his vast knowledge of ancient lore, explained these letters represented elemental forces essential to their mission. あ symbolized the beginning, the source of all energy; く represented the void, the potential within; ま stood for the demon, the challenge they faced. To gather these elemental forces, they had to undergo trials that tested their skills and resolve, pushing them to the limits of their abilities.
            </p>
            <p>
                Their quest led them through mystical forests, over towering mountains, and into caves pulsing with blockchain energy. Each trial brought them closer to understanding the balance between the digital and physical worlds. The gem's influence intensified with each key they secured, desperately trying to thwart their progress. 
            </p>
            <p>
                As they advanced in their quest, their story intertwined with the fabric of the Akuma project, drawing players into their narrative. The quest for the three keys, embodying the spirit of Akuma, became a legend, showcasing the harmony between ancient tradition and the new world promised by the blockchain. Sensei and Jiro's adventure symbolized the enduring spirit of adventure and the continuous fight against darkness, uniting players in a shared mission beyond the digital realm.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="story" className="story">
      <h2>Akuma Monogatari</h2>
      <div className="story-content">
        {renderStoryContent()}
        <div className="story-navigation">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
      <img src={StoryImage} alt="Akuma Coin" className="story-image" />
      <img src={Lanterns} alt="Lanterns" className="story-l-image" />
    </section>
  );
}

export default Story;