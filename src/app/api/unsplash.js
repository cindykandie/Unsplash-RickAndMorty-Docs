import axios from 'axios';

const fetchUnsplashPhotos = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos', {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Unsplash photos:', error);
    return [];
  }
};

export default fetchUnsplashPhotos;
