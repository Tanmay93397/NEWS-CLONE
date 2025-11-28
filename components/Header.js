// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-700 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/">
          <span className="text-2xl font-extrabold cursor-pointer">
            LiveHindustan
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a className="hover:underline cursor-pointer">देश</a>
          <a className="hover:underline cursor-pointer">राज्य</a>
          <a className="hover:underline cursor-pointer">खेल</a>
          <a className="hover:underline cursor-pointer">बिज़नेस</a>
        </nav>
      </div>
    </header>
  );
}


