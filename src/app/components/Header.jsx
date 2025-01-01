"use client"
import { useState } from 'react';
import Link from 'next/link';
import { SignedIn,SignedOut,SignInButton,UserButton } from '@clerk/nextjs';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-2xl font-semibold">
          <Link href="/">Blogify</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <Link href="/about" className="hover:text-blue-300">About</Link>
          <Link href="/projects" className="hover:text-blue-300">Projects</Link>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 19l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Login Button */}
     
        <button className="hidden md:block bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400">
       
        <SignedIn >
            <UserButton/>
          </SignedIn>
          <SignedOut>
          <SignInButton/>

          </SignedOut>
          </button>
        
     

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-blue-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-blue-800 space-y-4 py-4">
          <Link href="/" className="text-white hover:text-blue-300">Home</Link>
          <Link href="/about" className="text-white hover:text-blue-300">About</Link>
          <Link href="/projects" className="text-white hover:text-blue-300">Projects</Link>
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400">Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;
