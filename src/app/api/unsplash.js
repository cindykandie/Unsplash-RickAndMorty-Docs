import axios from 'axios';

const fetchUnsplashPhotos = async (searchTerm = '') => {
  const endpoint = searchTerm 
    ? `https://api.unsplash.com/search/photos`
    : `https://api.unsplash.com/photos`;
  const params = searchTerm ? { query: searchTerm } : {};
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
      },
      params,
    });
    return searchTerm ? response.data.results : response.data;
  } catch (error) {
    console.error('Error fetching Unsplash photos:', error);
    return [];
  }
};

export default fetchUnsplashPhotos;
