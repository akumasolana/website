import React, { useState, useEffect } from 'react';

function MemeDisplay() {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetchRandomMeme();
  }, []);

  const fetchRandomMeme = () => {
    try {
      const memeFiles = require.context('../memes', false, /\.(png|jpe?g)$/);
      const memeUrls = memeFiles.keys().map(memeFiles);
      const randomIndex = Math.floor(Math.random() * memeUrls.length);
      setMeme(memeUrls[randomIndex]);
    } catch (error) {
      console.error('Error fetching meme:', error);
    }
  };

  return (
    <section className="meme-display">
      <h2>Meme Display</h2>
      <div className="meme-container">
        {meme && <img src={meme} alt="Random Meme" />}
        <p className="meme-credit">All memes credit to the Akuma community!</p>
        <button onClick={fetchRandomMeme}>Get New</button>
      </div>
    </section>
  );
}

export default MemeDisplay;