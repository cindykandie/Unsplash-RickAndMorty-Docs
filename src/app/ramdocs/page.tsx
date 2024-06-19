import NavBar from '../components/NavBar';

const RickAndMortyDocs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Rick & Morty API Documentation</h1>
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p>The Rick & Morty API provides information about characters, locations, and episodes.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Endpoints</h2>
          <p>Here are some of the key endpoints:</p>
          <ul className="list-disc ml-6">
            <li>
              <code className="bg-gray-200 p-1 rounded">GET /character</code> - Fetch a list of characters
            </li>
            <li>
              <code className="bg-gray-200 p-1 rounded">GET /character/:id</code> - Fetch a single character by ID
            </li>
            <li>
              <code className="bg-gray-200 p-1 rounded">GET /location</code> - Fetch a list of locations
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Usage Examples</h2>
          <h3 className="text-xl font-bold mt-4">Fetch Characters</h3>
          <pre className="bg-gray-200 p-4 rounded shadow-md">
            {`
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching characters:', error));
            `}
          </pre>

          <h3 className="text-xl font-bold mt-4">Fetch a Character by ID</h3>
          <pre className="bg-gray-200 p-4 rounded shadow-md">
            {`
fetch('https://rickandmortyapi.com/api/character/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching character:', error));
            `}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default RickAndMortyDocs;
