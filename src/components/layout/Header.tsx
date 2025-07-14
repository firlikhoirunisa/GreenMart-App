import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  cartCount: number;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onSearchChange }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">GreenMart</h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari sayuran segar..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <Button variant="outline" size="sm" icon={User}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};