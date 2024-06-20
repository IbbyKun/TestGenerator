import React from 'react';
import backgroundImage from '../img/Hero1.jpg';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <div
      id="home"
      class="relative bg-white  h-screen text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Background Image"
          style={{
            transform: 'translateY(-10%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%)',
            filter: 'brightness(0.4)',
          }}
          className="object-cover object-center w-full h-full rounded-b-full"
        />
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="text-7xl font-bold leading-tight mb-4 text-purple-700">
          KAYA AI
        </h1>
        <p class="text-lg text-gray-300 mb-8">
          Unlocking Potential, Powering Progress
        </p>
        <div className="absolute bottom-6 flex justify-center">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-purple-700 rounded-full p-2 flex items-center cursor-pointer"
            style={{ fontSize: '4rem' }} // Adjust the font size here
          >
            <span className="transform rotate-180">&#x25B4;</span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
