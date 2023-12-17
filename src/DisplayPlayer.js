// DisplayPlayer.js

import React from 'react';
import { players } from './players'; // Import the players array

function DisplayPlayer({ playerId }) {
  // Find the player with the matching ID
  const foundPlayer = players.find(player => player.id === playerId);

  // Render player details or a message if not found
  return (
    <section className="w-1140px">
      {foundPlayer ? (
        <>
          <h2>{foundPlayer.firstName} {foundPlayer.lastName} ({foundPlayer.age})</h2>
          <p><b>Club</b>: {foundPlayer.club}</p>
          <p><b>Nationality</b>: {foundPlayer.nationality}</p>
          <p><b>Trophies</b>: {foundPlayer.trophies.join(', ')}</p>
          <p><b>Bio</b>: {foundPlayer.bio}</p>
        </>
      ) : (
        <p>Player not found.</p>
      )}
    </section>
  );
  
}


export default DisplayPlayer;