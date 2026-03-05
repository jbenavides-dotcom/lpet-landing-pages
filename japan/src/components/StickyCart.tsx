import { ShoppingBag, X, Truck, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SHIPPING } from '../constants/assets';

export default function StickyCart() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) setIsVisible(true);
      else if (window.scrollY <= 600) setIsVisible(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-dark text-white shadow-2xl transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2"><Clock size={18} className="text-red-400 animate-pulse" /><p className="text-sm"><span className="text-red-400 font-bold">限定焙煎</span> — 売り切れ前にご注文を</p></div>
            <div className="flex items-center gap-2"><Truck size={18} className="text-brand-gold" /><p className="text-sm"><span className="font-bold text-brand-gold">¥{SHIPPING.freeShippingThreshold.toLocaleString()}以上</span>送料無料</p></div>
          </div>
          <div className="md:hidden flex items-center gap-2"><Clock size={16} className="text-red-400 animate-pulse" /><p className="text-sm"><span className="text-brand-gold font-bold">¥10,000以上送料無料</span> • 限定焙煎</p></div>
          <div className="flex items-center gap-3">
            <a href="#products" className="bg-brand-pink hover:bg-white hover:text-brand-dark text-white px-6 py-2.5 font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-all shadow-lg"><ShoppingBag size={16} />今すぐ購入 — ¥6,200から</a>
            <button onClick={() => { setIsDismissed(true); setIsVisible(false); }} className="p-2 hover:bg-white/10 rounded transition-colors" aria-label="閉じる"><X size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
