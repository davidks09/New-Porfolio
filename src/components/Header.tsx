import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

  return (
    <header className="bg-dark-lighter/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5"></div>
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">D.O.S</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-accent-blue transition-all hover:translate-y-[-2px]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-accent-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-300 hover:text-accent-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;