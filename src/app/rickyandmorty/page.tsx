'use client'
import { useEffect, useState } from 'react';
import { fetchRickAndMortyCharacters } from './api/rickandmorty';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetchRickAndMortyCharacters();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {characters.map(character => (
          <div key={character.id} style={{ margin: '10px' }}>
            <img src={character.image} alt={character.name} style={{ maxWidth: '100%' }} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
