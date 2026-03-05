import { PROCESS_STEPS } from '../constants/assets';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Process</p>
          <h2 className="section-title">種から一杯へ</h2>
          <p className="text-lg text-brand-gold max-w-2xl mx-auto">
            すべての工程は、コロンビア・シパコンの私たちの農園で行われます。
            完全なトレーサビリティ、一切の妥協なし。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="group">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={step.image}
                  alt={step.titleJp}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-brand-pink flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-dark mb-2">{step.titleJp}</h3>
              <p className="text-brand-gold">{step.descriptionJp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
