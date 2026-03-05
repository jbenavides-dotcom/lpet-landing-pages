import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-dark">
            LA PALMA <span className="text-brand-gold">&</span> EL TUCÁN
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-brand-dark hover:text-brand-pink transition-colors">
            コーヒー
          </a>
          <a href="#process" className="text-brand-dark hover:text-brand-pink transition-colors">
            製造工程
          </a>
          <a href="#story" className="text-brand-dark hover:text-brand-pink transition-colors">
            私たちについて
          </a>
          <a href="#sustainability" className="text-brand-dark hover:text-brand-pink transition-colors">
            サステナビリティ
          </a>
          <a href="#products" className="btn-primary">
            今すぐ購入
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-beige">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#products" className="text-brand-dark py-2">コーヒー</a>
            <a href="#process" className="text-brand-dark py-2">製造工程</a>
            <a href="#story" className="text-brand-dark py-2">私たちについて</a>
            <a href="#sustainability" className="text-brand-dark py-2">サステナビリティ</a>
            <a href="#products" className="btn-primary text-center">今すぐ購入</a>
          </div>
        </div>
      )}
    </header>
  );
}
