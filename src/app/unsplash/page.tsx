'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fetchUnsplashPhotos from '../api/unsplash';
import NavBar from '../components/NavBar';

const Unsplash = () => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const data = await fetchUnsplashPhotos(searchTerm);
      setPhotos(data);
      setLoading(false);
    };
    fetchPhotos();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Unsplash Photos</h1>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search photos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow-md"
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader border-t-4 border-green-500 rounded-full w-16 h-16"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map(photo => (
              <div key={photo.id} className="bg-white p-4 rounded shadow-lg">
                <Image 
                  src={photo.urls.small} 
                  alt={photo.description} 
                  width={200} 
                  height={200} 
                  className="w-full h-auto rounded"
                />
                <p className="mt-2 text-center">{photo.description || 'Untitled'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Unsplash;
