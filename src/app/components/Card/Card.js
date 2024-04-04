import React from "react";
import { getCharacters } from "@/app/lib/characters";

async function Card() {
  const characters = await getCharacters();
  const data = characters.results;

  return (<div className="flex-container">
          {data.map((character) =>(
            <div key={character.id} className="card">
              <h2>{character.name}</h2>
              <img src={character.image} className="img"></img>
              <p>{character.type}</p>
            </div>
          ))}
  </div>);
};

export default Card;
