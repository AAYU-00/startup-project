import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, User, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Find Co-Founders', href: '/find-cofounders' },
    { name: 'Resources', href: '/resources' },
    { name: 'Community', href: '/community' },
    { name: 'Mentorship', href: '/mentorship' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Events', href: '/events' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                FounderHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;