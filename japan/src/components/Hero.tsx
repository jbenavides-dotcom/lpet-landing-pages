import { ChevronDown, Truck, Shield, Star, Clock } from 'lucide-react';
import { ASSETS, SOCIAL_PROOF, COPY_JP } from '../constants/assets';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ASSETS.hero.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 text-white px-6 max-w-7xl mx-auto pt-24 pb-12 w-full">
        <div className="max-w-xl">
          <div className="flex flex-wrap gap-3 md:gap-6 mb-6 text-sm text-brand-beige/90">
            <span className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">{SOCIAL_PROOF.avgRating}</span>
              <span className="text-brand-beige/70">({SOCIAL_PROOF.totalReviews}件のレビュー)</span>
            </span>
          </div>

          <p className="text-brand-gold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 font-medium">
            {COPY_JP.hero.tagline}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2]">
            {COPY_JP.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-brand-beige/90 mb-6 leading-relaxed whitespace-pre-line">
            {COPY_JP.hero.subheadline}
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg py-4 px-6 mb-6 inline-block">
            <p className="text-2xl md:text-3xl font-bold text-brand-gold">¥6,200から</p>
            <p className="text-brand-beige/80 text-sm mt-1">¥10,000以上送料無料 | 焙煎48時間以内発送</p>
          </div>

          <p className="text-white mb-8 text-lg">
            初めてのご注文は{' '}
            <span className="font-mono bg-brand-pink px-3 py-1 font-bold rounded">JAPAN10</span>
            {' '}で10%オフ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#products" className="btn-primary text-lg px-10 py-4 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all">
              {COPY_JP.hero.cta} — ¥6,200から
            </a>
            <a href="#process" className="btn-secondary border-white/50 text-white hover:bg-white hover:text-brand-dark px-8 py-4">
              製造工程を見る
            </a>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-brand-beige/80 mb-8">
            <span className="flex items-center gap-2"><Truck size={18} className="text-brand-gold" />コロンビアより直送</span>
            <span className="flex items-center gap-2"><Shield size={18} className="text-brand-gold" />30日間返金保証</span>
            <span className="flex items-center gap-2"><Clock size={18} className="text-brand-gold" />注文後焙煎</span>
          </div>

          <p className="text-brand-gold text-sm font-medium mb-8">{COPY_JP.hero.trustLine}</p>

          <a href="#products" className="inline-flex flex-col items-center gap-2 text-brand-beige/60 hover:text-white transition-colors">
            <span className="text-xs uppercase tracking-wider">コーヒーを見る</span>
            <ChevronDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
