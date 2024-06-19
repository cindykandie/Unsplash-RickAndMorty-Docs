import NavBar from './components/NavBar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold mb-8">Welcome to API Documentation</h1>
        <div className="flex space-x-8">
          <div className="text-center">
            <Image
              src="/path/to/presentation-image.jpg"
              alt="Presentation"
              width={300}
              height={200}
              className="rounded shadow-lg"
            />
            <Link href="/presentation" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Check out the presentation</Link>
          </div>
          <div className="text-center">
            <Image
              src="/path/to/landing-page-image.jpg"
              alt="Landing Page"
              width={300}
              height={200}
              className="rounded shadow-lg"
            />
            <Link href="/landing-page" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">Go to the main landing page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
