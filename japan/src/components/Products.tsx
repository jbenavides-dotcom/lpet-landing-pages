import { ShoppingBag, Star, Truck, Shield, Clock, Award } from 'lucide-react';
import { PRODUCTS, SHIPPING, SOCIAL_PROOF } from '../constants/assets';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="section-subtitle">Roasted Series</p>
          <h2 className="section-title">私たちのコーヒー</h2>
          <p className="text-lg text-brand-gold max-w-2xl mx-auto mb-6">
            テロワール、プロセス、情熱が語る物語。産地で焙煎した、最高の鮮度と風味をお届けします。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />))}</div>
              <span className="font-semibold">{SOCIAL_PROOF.avgRating}</span>
              <span>({SOCIAL_PROOF.totalReviews}件のレビュー)</span>
            </div>
            <span className="hidden md:inline text-brand-beige">|</span>
            <span>{SOCIAL_PROOF.customersServed}人以上のお客様</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 py-6 border-y border-brand-beige/30">
          <div className="flex items-center gap-2 text-sm text-brand-dark"><Truck size={20} className="text-brand-green" /><span><strong>¥10,000以上</strong>送料無料</span></div>
          <div className="flex items-center gap-2 text-sm text-brand-dark"><Clock size={20} className="text-brand-green" /><span><strong>注文後焙煎</strong>で発送</span></div>
          <div className="flex items-center gap-2 text-sm text-brand-dark"><Shield size={20} className="text-brand-green" /><span><strong>30日間</strong>返金保証</span></div>
          <div className="flex items-center gap-2 text-sm text-brand-dark"><Award size={20} className="text-brand-green" /><span><strong>受賞歴</strong>のある農園</span></div>
        </div>

        <div className="flex justify-center gap-4 mb-8 text-gray-400">
          <span className="text-xs uppercase tracking-wider">安全なお支払い:</span>
          <div className="flex gap-3 items-center">
            <span className="font-semibold text-gray-600">Visa</span>
            <span className="font-semibold text-gray-600">Mastercard</span>
            <span className="font-semibold text-gray-600">JCB</span>
            <span className="font-semibold text-gray-600">PayPal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-brand-cream rounded-none overflow-hidden hover:shadow-xl transition-all duration-300 relative">
              {product.badge && (<div className="absolute top-4 left-4 z-10 bg-brand-pink text-white text-xs px-3 py-1 uppercase tracking-wider font-bold">{product.badge}</div>)}
              <div className={`relative h-80 ${product.color} flex items-center justify-center p-8 overflow-hidden`}>
                {/* Imagen frontal (default) - SEO optimized */}
                <img
                  src={product.image}
                  alt={`${product.name} ${product.nameJp} - ${product.processJp} コロンビア スペシャルティコーヒー`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:opacity-0 group-hover:scale-95"
                />
                {/* Imagen 3 ángulos (hover) - preload on hover */}
                <img
                  src={product.imageHover}
                  alt={`${product.name} パッケージ 3面図 - La Palma El Tucan`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 m-auto max-h-[90%] max-w-[90%] object-contain transition-all duration-500 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                />
                <span className="absolute top-4 right-4 bg-brand-gold text-white text-xs px-3 py-1 uppercase tracking-wider">{product.tag}</span>
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs"><span className="text-brand-gold font-bold">{product.altitude}</span></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div><h3 className="text-xl font-bold text-brand-dark">{product.name}</h3><p className="text-sm text-brand-gold">{product.nameJp}</p></div>
                  <div className="text-right">
                    {product.comparePrice && (<span className="text-gray-400 line-through text-sm block">¥{product.comparePrice.toLocaleString()}</span>)}
                    <span className="text-2xl font-bold text-brand-pink">¥{product.price.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-brand-gold text-sm mb-2">{product.processJp} • {product.altitude}</p>
                <p className="text-sm text-gray-500 mb-1">{product.weight}</p>
                <p className="text-gray-600 text-sm mb-4 italic">"{product.notesJp}"</p>
                {product.stock < 50 && (<p className="text-sm text-red-600 mb-4 flex items-center gap-1"><span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>残り{product.stock}袋のみ</p>)}
                <button className="w-full btn-primary flex items-center justify-center gap-2 group-hover:bg-brand-dark transition-colors"><ShoppingBag size={18} />カートに追加 — ¥{product.price.toLocaleString()}</button>
                {product.price >= SHIPPING.freeShippingThreshold && (<p className="text-center text-xs text-brand-green mt-2 flex items-center justify-center gap-1"><Truck size={14} />送料無料対象</p>)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-dark text-white py-8 px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4"><Truck size={40} className="text-brand-gold" /><div><h4 className="text-xl font-bold">¥10,000以上のご注文で送料無料</h4><p className="text-brand-beige/70">{SHIPPING.fulfillmentLocation} • {SHIPPING.standardShipping.days}</p></div></div>
            <div className="text-center md:text-right"><p className="text-brand-gold font-semibold">{SHIPPING.roastedFresh}</p><p className="text-sm text-brand-beige/70">日本全国へお届け</p></div>
          </div>
        </div>

        <div className="mt-8 text-center bg-brand-beige/30 py-6 px-8 border border-brand-gold/30">
          <p className="text-brand-dark"><span className="font-bold text-brand-pink">初めてのご注文ですか？</span>{' '}コード <span className="font-mono bg-brand-gold/20 px-2 py-1 font-bold">JAPAN10</span> で10%オフ</p>
        </div>
      </div>
    </section>
  );
}
