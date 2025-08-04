import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">StychBrand</h1>
      <ul className="flex gap-4">
        <li><a href="#home" className="hover:text-green-400">Home</a></li>
        <li><a href="#about" className="hover:text-green-400">About</a></li>
        <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
