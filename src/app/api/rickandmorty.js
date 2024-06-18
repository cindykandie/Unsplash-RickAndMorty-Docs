import axios from 'axios';

const fetchRickAndMortyCharacters = async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Rick & Morty characters:', error);
    return [];
  }
};

export default fetchRickAndMortyCharacters;
