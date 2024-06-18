import Link from "next/link";

export default function Home() {
  return (
    <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/unsplash">Unsplash Photos</Link></li>
          <li><Link href="/rickandmorty">Rick & Morty Characters</Link></li>
        </ul>
      </nav>
  );
}
