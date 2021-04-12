import React from "react";

export default function DisplaySimpsonCharacter({ simpsonCharacter }) {
  return (
    <div className="DisplaySimpsonCharacter">
      <h1>{simpsonCharacter.character}</h1>
      <img src={simpsonCharacter.image} alt={simpsonCharacter.character} />
      <p>{simpsonCharacter.quote}</p>
    </div>
  );
}
