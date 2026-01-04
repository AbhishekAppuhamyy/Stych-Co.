import React from 'react';
import heroImage from '../assets/hero.png'; // Replace with your image

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to StychBrand</h2>
        <p className="mt-4 text-gray-600">We create stylish digital experiences.change upwaord styles and downward</p>
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Get Started</button>
      </div>
      <img src={heroImage} alt="Hero" className="w-full md:w-1/2 mt-6 md:mt-0" />
    </section>
  );
};

export default Hero;
