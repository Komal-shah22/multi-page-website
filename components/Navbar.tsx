'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#160f41] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">My Website</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-white px-3 py-2 hover:bg-[#7a7a7a] rounded">
            Home
          </Link>
          <Link href="/about" className="text-white px-3 py-2 hover:bg-[#7a7a7a] rounded">
            About
          </Link>
          <Link href="/services" className="text-white px-3 py-2 hover:bg-[#7a7a7a] rounded">
            Services
          </Link>
          <Link href="/contact" className="text-white px-3 py-2 hover:bg-[#7a7a7a] rounded">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
