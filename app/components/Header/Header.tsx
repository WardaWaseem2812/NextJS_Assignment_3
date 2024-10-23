import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <h1 className="text-white text-2xl text-center">My Landing Page</h1>
      <nav>
        <ul className="flex space-x-3 text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
