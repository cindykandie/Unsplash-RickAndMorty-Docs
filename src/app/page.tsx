import NavBar from "./components/NavBar";
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <header className="bg-green-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to API Documentation</h1>
          <p className="mt-4 text-lg">
            Learn how to use the Unsplash and Rick & Morty APIs with ease
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
      <section id="presentations" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Presentations</h2>
          <div className="flex space-x-8 justify-center">
            <div className="text-center">
              <Image
                src="/biz.png"
                alt="Business Presentation"
                width={300}
                height={200}
                className="rounded shadow-lg"
              />
              <Link
                href="https://docs.google.com/presentation/d/1ygzytI-kNj2wGqfwAoLJZqfXeWH4EoG1ouTPumymsfs/edit?usp=sharing"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Business Presentation
              </Link>
            </div>
            <div className="text-center">
              <Image
                src="/dev.png"
                alt="Developer Presentation"
                width={300}
                height={200}
                className="rounded shadow-lg"
              />
              <Link
                href="https://docs.google.com/presentation/d/1qq6VHscCNwBWt4AfPWaF-SNbuhQ5gpj6TD2lH-5oQIo/edit?usp=sharing"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Developer Presentation
              </Link>
            </div>
          </div>
        </section>
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p>
            This documentation provides comprehensive information on how to
            integrate and use the Unsplash and Rick & Morty APIs. You will find
            detailed information about the endpoints, example use cases, and
            code samples to help you get started quickly.
          </p>
        </section>

        <section id="api-documentation" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">API Documentation</h2>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Unsplash API</h3>
            <p>
              The Unsplash API provides access to a large collection of
              high-quality photos. You can fetch photos, search for specific
              images, and access various photo metadata.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li>
                <code className="bg-gray-200 p-1 rounded">GET /photos</code> -
                Fetch a list of photos
              </li>
              <li>
                <code className="bg-gray-200 p-1 rounded">GET /photos/:id</code>{" "}
                - Fetch a single photo by ID
              </li>
              <li>
                <code className="bg-gray-200 p-1 rounded">
                  GET /search/photos
                </code>{" "}
                - Search for photos
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded shadow-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Rick & Morty API</h3>
            <p>
              The Rick & Morty API provides information about characters,
              locations, and episodes from the Rick & Morty series.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li>
                <code className="bg-gray-200 p-1 rounded">GET /character</code>{" "}
                - Fetch a list of characters
              </li>
              <li>
                <code className="bg-gray-200 p-1 rounded">
                  GET /character/:id
                </code>{" "}
                - Fetch a single character by ID
              </li>
              <li>
                <code className="bg-gray-200 p-1 rounded">GET /location</code> -
                Fetch a list of locations
              </li>
            </ul>
          </div>
        </section>

        <section id="use-cases" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Example Use Cases</h2>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Unsplash API Use Cases</h3>
            <ul className="list-disc ml-6">
              <li>Marketing Campaigns</li>
              <li>Website and Blog Content</li>
              <li>Social Media Engagement</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded shadow-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">
              Rick & Morty API Use Cases
            </h3>
            <ul className="list-disc ml-6">
              <li>Character Profiles</li>
              <li>Episode Guides</li>
              <li>Interactive Fan Experiences</li>
            </ul>
          </div>
        </section>

        <section id="code-samples" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Code Samples</h2>
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Fetching Photos from Unsplash
            </h3>
            <pre className="bg-gray-200 p-4 rounded shadow-md">
              {`
const fetchPhotos = async () => {
  const response = await fetch('https://api.unsplash.com/photos', {
    headers: {
      Authorization: 'Client-ID YOUR_ACCESS_KEY',
    },
  });
  const data = await response.json();
  console.log(data);
};
fetchPhotos();
              `}
            </pre>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Searching Photos on Unsplash
            </h3>
            <pre className="bg-gray-200 p-4 rounded shadow-md">
              {`
const searchPhotos = async (query) => {
  const response = await fetch(\`https://api.unsplash.com/search/photos?query=\${query}\`, {
    headers: {
      Authorization: 'Client-ID YOUR_ACCESS_KEY',
    },
  });
  const data = await response.json();
  console.log(data.results);
};
searchPhotos('nature');
              `}
            </pre>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Fetching Characters from Rick & Morty API
            </h3>
            <pre className="bg-gray-200 p-4 rounded shadow-md">
              {`
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching characters:', error));
              `}
            </pre>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Fetching a Character by ID
            </h3>
            <pre className="bg-gray-200 p-4 rounded shadow-md">
              {`
fetch('https://rickandmortyapi.com/api/character/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching character:', error));
              `}
            </pre>
          </div>
        </section>
       
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Cindy Kandie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
