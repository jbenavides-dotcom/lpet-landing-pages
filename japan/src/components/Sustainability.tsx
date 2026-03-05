import { Leaf, Bird, Users, TreePine } from 'lucide-react';
import { ASSETS, SUSTAINABILITY_STATS } from '../constants/assets';

const ICONS = [TreePine, Bird, Leaf, Users];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-24 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-beige uppercase tracking-[0.3em] text-sm mb-4">
              Regenerative Agriculture
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              還元するコーヒー
            </h2>

            <p className="text-brand-beige/80 text-lg mb-8">
              私たちは害を最小限にするだけではありません — 積極的に再生しています。
              私たちの農園は、炭素吸収源であり、野生生物の回廊であり、地域社会のパートナーです。
            </p>

            <div className="grid grid-cols-2 gap-6">
              {SUSTAINABILITY_STATS.map((stat, index) => {
                const Icon = ICONS[index];
                return (
                  <div key={stat.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-brand-beige" size={24} />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-brand-beige/70 text-sm">{stat.labelJp}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-white/10">
              <h4 className="font-bold text-lg mb-2">La Amistadプログラム</h4>
              <p className="text-brand-beige/80">
                私たちは200以上の近隣家族とパートナーシップを結び、BioCharの提供、
                トレーニング、公正な価格を実現しています。彼らのコーヒーは、
                私たちの施設で同じ品質基準で処理されます。
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={ASSETS.sostenibilidad.panoramica}
              alt="La Palma & El Tucánの雲霧林"
              className="w-full rounded-none shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
