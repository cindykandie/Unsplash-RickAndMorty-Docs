'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fetchUnsplashPhotos from '../api/unsplash';
import NavBar from '../components/NavBar';

// Define a type for the photo data
type Photo = {
  id: string;
  urls: {
    small: string;
  };
  description: string;
};

// Component for displaying Unsplash photos
const Unsplash = () => {
  // State for storing photos data
  const [photos, setPhotos] = useState<Photo[]>([]);
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State for loading indicator
  const [loading, setLoading] = useState(true);

  // Fetch photos when the component mounts or searchTerm changes
  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const data: Photo[] = await fetchUnsplashPhotos(searchTerm);
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
          {/* Input for searching photos */}
          <input
            type="text"
            placeholder="Search photos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded shadow-md"
          />
        </div>
        {loading ? (
          // Show loading spinner while fetching data
          <div className="flex justify-center items-center">
            <div className="loader border-t-4 border-green-500 rounded-full w-16 h-16"></div>
          </div>
        ) : (
          // Display fetched photos
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map(photo => (
              <div key={photo.id} className="bg-white p-4 rounded shadow-lg">
                <Image 
                  src={photo.urls.small} 
                  alt={photo.description || 'Untitled'} 
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
