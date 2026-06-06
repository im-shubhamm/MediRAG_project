import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition duration-300">
                <Activity className="h-6 w-6 text-red-400 animate-pulse" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                MediRAG
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition duration-300 ${
                    isActive(link.path)
                      ? 'bg-blue-800 text-white shadow-inner'
                      : 'hover:bg-white/10 hover:text-white text-blue-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              to="/appointments"
              className="bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition duration-300 flex items-center space-x-1"
            >
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none transition duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-500/30 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                  isActive(link.path)
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-100 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/appointments"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-white text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-full text-center text-base font-semibold shadow transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
