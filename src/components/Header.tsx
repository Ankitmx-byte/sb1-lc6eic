import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">FlipMart</Link>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="bg-white text-gray-800 px-4 py-2 rounded-sm w-96"
              />
              <Search className="absolute right-3 top-2 text-gray-400" />
            </div>
            <Link to="/cart" className="flex items-center">
              <ShoppingCart className="mr-1" />
              Cart
            </Link>
            <div className="flex items-center">
              <User className="mr-1" />
              Login
            </div>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 py-2">
          <div className="container mx-auto px-4">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="bg-white text-gray-800 px-4 py-2 rounded-sm w-full mb-2"
            />
            <Link to="/cart" className="block py-2">Cart</Link>
            <div className="py-2">Login</div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;