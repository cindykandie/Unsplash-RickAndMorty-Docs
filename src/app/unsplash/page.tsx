'use client'
import { useEffect, useState } from 'react';
import { fetchUnsplashPhotos } from '../api/unsplash';

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await fetchUnsplashPhotos();
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Unsplash Photos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ margin: '10px' }}>
            <img src={photo.urls.small} alt={photo.description} style={{ maxWidth: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unsplash;
