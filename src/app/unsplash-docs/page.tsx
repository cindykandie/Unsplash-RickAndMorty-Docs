import NavBar from '../components/NavBar';

const UnsplashDocs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Unsplash API Documentation</h1>
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p>The Unsplash API allows you to access high-quality photos from Unsplash.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Endpoints</h2>
          <p>Here are some of the key endpoints:</p>
          <ul className="list-disc ml-6">
            <li>
              <code className="bg-gray-200 p-1 rounded">GET /photos</code> - Fetch a list of photos
            </li>
            <li>
              <code className="bg-gray-200 p-1 rounded">GET /photos/:id</code> - Fetch a single photo by ID
            </li>
            <li>
              <code className="bg-gray-200 p-1 rounded">GET /search/photos</code> - Search for photos
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Usage Examples</h2>
          <h3 className="text-xl font-bold mt-4">Fetch Photos</h3>
          <pre className="bg-gray-200 p-4 rounded shadow-md">
            {`
fetch('https://api.unsplash.com/photos', {
  headers: {
    Authorization: 'Client-ID YOUR_ACCESS_KEY',
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching photos:', error));
            `}
          </pre>

          <h3 className="text-xl font-bold mt-4">Search Photos</h3>
          <pre className="bg-gray-200 p-4 rounded shadow-md">
            {`
fetch('https://api.unsplash.com/search/photos?query=YOUR_SEARCH_TERM', {
  headers: {
    Authorization: 'Client-ID YOUR_ACCESS_KEY',
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error searching photos:', error));
            `}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default UnsplashDocs;
