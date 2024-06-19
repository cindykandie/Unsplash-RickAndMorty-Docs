import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-green-500 p-4 text-white">
      <ul className="flex space-x-4 justify-center">
      <li>
          <Link href="/" className="hover:underline">Landing Page</Link>
        </li>
        <li>
          <Link href="/unsplash" className="hover:underline">Unsplash Photos</Link>
        </li>
        <li>
          <Link href="/rickandmorty" className="hover:underline">Rick & Morty Characters</Link>
        </li>
        <li>
          <Link href="/unsplash-docs" className="hover:underline">Unsplash API Docs</Link>
        </li>
        <li>
          <Link href="/ramdocs" className="hover:underline">Rick & Morty API Docs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
