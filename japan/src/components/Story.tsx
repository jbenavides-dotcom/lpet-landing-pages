import { Award, MapPin } from 'lucide-react';
import { ASSETS } from '../constants/assets';

export default function Story() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={ASSETS.equipo.fundadores}
              alt="Felipe and Elisa - 創業者"
              className="w-full rounded-none shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-dark p-6 shadow-xl hidden md:block">
              <div className="flex items-center gap-3 text-white">
                <Award className="text-brand-gold" size={32} />
                <div>
                  <p className="font-bold">WBC 2019</p>
                  <p className="text-sm text-brand-beige/70">チャンピオン品種</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">農園と家族と、ひとつのビジョン</h2>

            <p className="text-lg text-gray-600 mb-6">
              2012年、私たちは都会を離れ、コロンビア・シパコンの雲霧林に移り住みました。
              世界最高のコーヒーを育てるという夢は、19ヘクタールの再生農園へと成長しました。
            </p>

            <p className="text-lg text-gray-600 mb-8">
              今日、La Palma & El Tucánは、ゲイシャ、シドラ（2019年世界バリスタチャンピオンシップ優勝品種）、
              そしてコーヒーの可能性を押し広げる実験的なプロセスの本拠地です。
            </p>

            <div className="flex items-center gap-4 text-brand-gold mb-8">
              <MapPin size={24} />
              <span className="text-lg">シパコン、クンディナマルカ、コロンビア • 標高1,700m</span>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-beige">
              <div>
                <p className="text-3xl font-bold text-brand-pink">2012</p>
                <p className="text-sm text-brand-gold">創業</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-pink">19</p>
                <p className="text-sm text-brand-gold">ヘクタール</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-pink">14</p>
                <p className="text-sm text-brand-gold">コーヒー区画</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
