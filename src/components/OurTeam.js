import React from 'react';
import Member1Image from '../assets/figA.jpeg';
import Member2Image from '../assets/figC.jpeg';

function OurTeam() {
  return (
    <section className="our-team">
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src={Member1Image} alt="Team Member 1" />
          <h3>@Sensei</h3>
          <p>A developer on a mission to bring a new opportunities to all of human kind. He has worked on 10 businesses throughout his life. On his free time, he works as a part time crypto degen. His goals in life is to smoke good shit and make good shit. He loves beautiful spanish latinas. </p>
        </div>
        <div className="team-member">
          <img src={Member2Image} alt="Team Member 2" />
          <h3>@jiro</h3>
          <p>A chill man who brings the chills to the community with his vibe, and enthusiasm. He is a old crypto degen that loves to game day and night. On his free time he loves to scare people in good and bad ways. He also leveraged 100k on bitcoin and lost it all and now he sold his soul to the matrix.</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;