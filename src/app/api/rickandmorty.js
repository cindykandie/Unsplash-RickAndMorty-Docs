import { gql } from '@apollo/client';
import client from '../lib/apolloClient';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const fetchRickAndMortyCharacters = async () => {
  try {
    const { data } = await client.query({
      query: GET_CHARACTERS,
    });
    return data.characters.results;
  } catch (error) {
    console.error('Error fetching Rick & Morty characters:', error);
    return [];
  }
};

export default fetchRickAndMortyCharacters;
