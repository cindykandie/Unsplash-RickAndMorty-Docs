'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fetchRickAndMortyCharacters from '../api/rickandmorty';

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
            <Image 
              src={character.image} 
              alt={character.name} 
              width={200} 
              height={200} 
              style={{ maxWidth: '100%' }} 
            />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMorty;
