import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS, SOCIAL_PROOF } from '../constants/assets';

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">Customer Reviews</p>
          <h2 className="section-title">お客様の声</h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-3xl font-bold text-brand-dark">{SOCIAL_PROOF.avgRating}</p>
              <p className="text-sm text-gray-600">{SOCIAL_PROOF.totalReviews}件のレビューに基づく</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-white p-8 relative">
              <Quote size={40} className="absolute top-6 right-6 text-brand-beige/30" />

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-brand-gold mb-3 uppercase tracking-wider">
                {review.product}
              </p>

              <p className="text-gray-700 mb-6 text-lg">
                「{review.text}」
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-brand-dark">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-brand-green text-sm">
                    <CheckCircle size={16} />
                    <span>認証済み</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-gray-400 mt-4">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">メディア掲載</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {SOCIAL_PROOF.featuredIn.map((publication) => (
              <span key={publication} className="text-xl md:text-2xl font-serif text-brand-dark">
                {publication}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#products"
            className="btn-primary inline-flex items-center gap-2"
          >
            コーヒーを購入する
          </a>
          <p className="text-sm text-gray-500 mt-4">
            {SOCIAL_PROOF.customersServed}人のお客様にご愛飲いただいています
          </p>
        </div>
      </div>
    </section>
  );
}
