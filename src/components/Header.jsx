import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/src/assets/animal-shelter.png" alt="Onigiri Cat" className="w-10 h-10" />
          <span className="font-bold text-xl text-gray-800">$ONIGIRI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#tokenomics" className="hover:text-orange-500 transition">Tokenomics</a>
          <a href="#how-to-buy" className="hover:text-orange-500 transition">How to Buy</a>
          <a href="#community" className="hover:text-orange-500 transition">Community</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://raydium.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-sm"
          >
            Buy $ONIGIRI
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-orange-500 transition">About</a>
            <a href="#tokenomics" className="hover:text-orange-500 transition">Tokenomics</a>
            <a href="#how-to-buy" className="hover:text-orange-500 transition">How to Buy</a>
            <a href="#community" className="hover:text-orange-500 transition">Community</a>
            <a
              href="https://raydium.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-center"
            >
              Buy $ONIGIRI
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
