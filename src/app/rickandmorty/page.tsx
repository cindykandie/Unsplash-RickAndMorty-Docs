'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fetchRickAndMortyCharacters from '../api/rickandmorty';
import NavBar from '../components/NavBar';

// Define a type for the character data
type Character = {
  id: number;
  name: string;
  status: string;
  image: string;
};

// Component for displaying Rick & Morty characters
const RickAndMorty = () => {
  // State for storing characters data
  const [characters, setCharacters] = useState<Character[]>([]);
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State for status filter
  const [statusFilter, setStatusFilter] = useState('all');
  // State for loading indicator
  const [loading, setLoading] = useState(true);

  // Fetch characters when the component mounts
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data: Character[] = await fetchRickAndMortyCharacters();
      setCharacters(data);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  // Filter characters based on search term and status filter
  const filteredCharacters = characters.filter(character => {
    const name = character.name || '';
    const status = character.status || '';
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === 'all' || status.toLowerCase() === statusFilter.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Rick & Morty Characters</h1>
        <div className="mb-8 flex justify-center space-x-4">
          {/* Input for searching characters by name */}
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow-md"
          />
          {/* Dropdown for filtering characters by status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow-md"
          >
            <option value="all">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        {loading ? (
          // Show loading spinner while fetching data
          <div className="flex justify-center items-center">
            <div className="loader border-t-4 border-green-500 rounded-full w-16 h-16"></div>
          </div>
        ) : (
          // Display filtered characters
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCharacters.map(character => (
              <div key={character.id} className="bg-white p-4 rounded shadow-lg">
                <Image 
                  src={character.image} 
                  alt={character.name} 
                  width={200} 
                  height={200} 
                  className="w-full h-auto rounded"
                />
                <p className="mt-2 text-center">{character.name}</p>
                {character.status && <p className="text-center text-gray-600">Status: {character.status}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RickAndMorty;
