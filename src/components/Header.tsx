import React from 'react';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { Input } from './Input';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#00abbe] text-white">
      {/* Top bar */}
      <div className="bg-[#0096a7] py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <span>⭐⭐⭐⭐⭐ 1655 Αξιολογήσεις από πελατάρες</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Δωρεάν Μεταφορικά για Παραγγελίες άνω των 50€</span>
            <span>Τηλέφωνο Παραγγελιών: 210 44 155 21</span>
            <div className="flex items-center space-x-2">
              <span>EL</span>
              <span>/</span>
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/paidika-logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold leading-tight">   </h1>
              <p className="text-sm opacity-90">    </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a href="#" className="hover:text-white/80 transition-colors">ΑΓΟΡΙΑ</a>
            <a href="#" className="hover:text-white/80 transition-colors">ΚΟΡΙΤΣΙΑ</a>
            <a href="#" className="hover:text-white/80 transition-colors">ΒΡΕΦΙΚΑ</a>
            <a href="#" className="hover:text-white/80 transition-colors">ΠΡΟΣΦΟΡΕΣ</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                type="text"
                placeholder="Αναζήτηση..."
                className="w-64 pr-10 bg-white text-gray-900"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#5196a7] p-2">
                <User className="h-5 w-5" />
                <span className="hidden lg:inline ml-1">Λογαριασμός</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#5196a7] p-2">
                <Heart className="h-5 w-5" />
                <span className="hidden lg:inline ml-1">Αγαπημένα</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-[#5196a7] p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="hidden lg:inline ml-1">Καλάθι</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="text-white hover:bg-[#0096a7] p-2 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden bg-[#0096a7] px-4 py-2">
        <div className="flex flex-col space-y-2">
          <a href="#" className="text-white hover:text-white/80 py-1">ΑΓΟΡΙΑ</a>
          <a href="#" className="text-white hover:text-white/80 py-1">ΚΟΡΙΤΣΙΑ</a>
          <a href="#" className="text-white hover:text-white/80 py-1">ΒΡΕΦΙΚΑ</a>
          <a href="#" className="text-white hover:text-white/80 py-1">ΠΡΟΣΦΟΡΕΣ</a>
        </div>
        <div className="mt-2 pt-2 border-t border-[#00abbe]/60">
          <Input
            type="text"
            placeholder="Αναζήτηση..."
            className="w-full bg-white text-gray-900"
          />
        </div>
      </div>
    </header>
  );
};
