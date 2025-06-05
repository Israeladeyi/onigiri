import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-100 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Onigiri Cat 🐾
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The fluffiest memecoin on Solana — cute, chaotic, and ready to rocket. Be part of the $ONIGIRI army!
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <a
              href="https://raydium.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              Buy Now
            </a>
            <a
              href="#tokenomics"
              className="text-orange-500 font-medium hover:underline"
            >
              View Tokenomics
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/onigiri-cat.png"
            alt="Onigiri Cat"
            className="w-full max-w-sm mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
