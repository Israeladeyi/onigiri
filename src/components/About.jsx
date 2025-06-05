import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          About Onigiri Cat Coin 🐱🍙
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text content */}
          <div className="md:flex-1 text-gray-700 text-lg leading-relaxed">
            <p className="mb-6">
              Born on the Solana blockchain, <span className="font-semibold text-orange-500">$ONIGIRI</span> is the chubby little sibling of Dogecoin and Shiba Inu. It’s more than just a meme — it’s a community-driven project fueled by fun, fluff, and the dream of 1000x gains.
            </p>
            <p className="mb-6">
              Onigiri Cat loves naps, snacks, and moonshots. Join us as we build a friendly, safe, and purr-fectly playful crypto family with clear goals and unstoppable momentum.
            </p>
            <p>
              From humble beginnings to viral hype, Onigiri Cat is here to stay — soft, sassy, and ready to make your portfolio purr.
            </p>
          </div>

          {/* Illustration */}
          <div className="md:flex-1">
            <img
              src="./assets/onigiri.jpg"
              alt="Onigiri Cat doodle"
              className="mx-auto max-w-xs md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
