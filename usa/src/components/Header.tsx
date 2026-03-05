import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ASSETS } from '../constants/assets';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={ASSETS.logo}
            alt="La Palma & El Tucán"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-brand-dark hover:text-brand-pink transition-colors">
            Products
          </a>
          <a href="#process" className="text-brand-dark hover:text-brand-pink transition-colors">
            Our Process
          </a>
          <a href="#story" className="text-brand-dark hover:text-brand-pink transition-colors">
            Our Story
          </a>
          <a href="#sustainability" className="text-brand-dark hover:text-brand-pink transition-colors">
            Sustainability
          </a>
          <a href="#products" className="btn-primary">
            Shop Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#products" className="text-brand-dark py-2">Products</a>
            <a href="#process" className="text-brand-dark py-2">Our Process</a>
            <a href="#story" className="text-brand-dark py-2">Our Story</a>
            <a href="#sustainability" className="text-brand-dark py-2">Sustainability</a>
            <a href="#products" className="btn-primary text-center">Shop Now</a>
          </div>
        </div>
      )}
    </header>
  );
}
