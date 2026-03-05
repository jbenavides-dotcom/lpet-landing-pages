import { ASSETS, COPY_JP } from '../constants/assets';

export default function ProducerAdvantage() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">The Producer Advantage</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{COPY_JP.producerAdvantage.title}</h2>
            <p className="text-brand-beige/80 text-lg mb-8">{COPY_JP.producerAdvantage.subtitle}</p>
            <div className="space-y-6">
              {COPY_JP.producerAdvantage.points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-pink flex items-center justify-center flex-shrink-0"><span className="text-white font-bold">0{idx + 1}</span></div>
                  <div><h4 className="font-bold mb-1">{point.title}</h4><p className="text-brand-beige/70">{point.description}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={ASSETS.tostadora.frontal} alt="On-site roasting at La Palma y El Tucán" className="w-full rounded-none shadow-2xl" />
            <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/90 p-4">
              <p className="text-brand-gold text-sm uppercase tracking-wider">産地焙煎</p>
              <p className="text-white font-bold">育てた同じ手で焙煎</p>
              <p className="text-brand-beige/70 text-sm">発送48時間以内に焙煎</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
