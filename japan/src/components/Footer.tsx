import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              LA PALMA <span className="text-brand-gold">&</span> EL TUCÁN
            </h3>
            <p className="text-brand-beige/70 mb-6 max-w-md">
              コロンビアの雲霧林から産地直送のスペシャルティコーヒー。
              種から焙煎まで、一つの農園、一つのチーム。
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lapalmayeltucan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:japan@lapalmayeltucan.com"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-brand-gold mb-4">ショップ</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-brand-beige/70 hover:text-white transition-colors">すべてのコーヒー</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-white transition-colors">定期購入</a></li>
              <li><a href="#" className="text-brand-beige/70 hover:text-white transition-colors">ギフトカード</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-brand-gold mb-4">お問い合わせ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold flex-shrink-0 mt-1" />
                <span className="text-brand-beige/70">
                  シパコン、クンディナマルカ<br />コロンビア
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold" />
                <a href="mailto:japan@lapalmayeltucan.com" className="text-brand-beige/70 hover:text-white transition-colors">
                  japan@lapalmayeltucan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-beige/50 text-sm">
            © 2026 La Palma & El Tucán. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-brand-beige/50 hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="text-brand-beige/50 hover:text-white transition-colors">利用規約</a>
            <a href="#" className="text-brand-beige/50 hover:text-white transition-colors">配送について</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
