import React from 'react';
import {
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <img
            src="./assets/animal-shelter2.png"
            alt="Onigiri Cat Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-white">$ONIGIRI CAT COIN</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-gray-400 hover:text-orange-500 transition">
          <a
            href="https://twitter.com/onigiri_cat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://discord.gg/onigiricat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="text-2xl"
          >
            <FaDiscord />
          </a>
          <a
            href="https://t.me/onigiricat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-2xl"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://github.com/onigiricat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Onigiri Cat Coin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
