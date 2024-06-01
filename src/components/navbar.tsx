import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-blue-600 p-4 w-screen">
      <div className="container mx-auto flex justify-center items-center">
        <nav className="flex justify-end">
          <Link href="/" className="text-black mx-12 hover:text-gray-300 font-bold">
            Home
          </Link>
          <Link href="/profile" className="text-black mx-12 hover:text-gray-300 font-bold">
            Profile
          </Link>
          <Link href="/posts" className="text-black mx-12 hover:text-gray-300 font-bold">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
