// Asset URLs - Japan Landing Page
const BASE_PATH = `${import.meta.env.BASE_URL}images`;

// Cloudinary optimized URLs (auto format, auto quality, responsive)
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dsylu9a7k/image/upload';
const CLOUDINARY_OPT = 'f_auto,q_auto,w_800'; // WebP auto, quality auto, max 800px

export const ASSETS = {
  hero: {
    banner: `${CLOUDINARY_BASE}/f_auto,q_auto,w_1920/lpet-japan/hero-japan-hd.png`,
    felipeCaballo: `${BASE_PATH}/hero/hero_felipe_caballo.jpg`,
    fincaBosque: `${BASE_PATH}/hero/hero_finca_bosque_niebla.jpg`,
  },
  productos: {
    // Cloudinary optimized: auto WebP, auto quality, max 800px width
    // Front = imagen principal, Hover = rotación al pasar mouse
    legendary: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/legendary-front.jpg`,
    legendaryHover: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/legendary-back.png`,
    geisha: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/geisha-front.png`,
    geishaHover: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/geisha-3angles.jpg`,
    sidra: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/sidra-front.jpg`,
    sidraHover: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/sidra-3angles.png`,
    palma: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/palma-front.png`,
    palmaHover: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/palma-3angles.jpg`,
    tucan: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/tucan-front.png`,
    tucanHover: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/tucan-3angles.jpg`,
  },
  proceso: {
    vivero: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/proceso-vivero.jpg`,
    cultivo: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/proceso-cultivo.jpg`,
    cereza: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/proceso-cereza.jpg`,
    secado: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/proceso-secado.jpg`,
    fermentacion: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/proceso-fermentacion.jpg`,
    tostadora: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-japan/proceso-tostadora.jpg`,
  },
  equipo: {
    fundadores: `${BASE_PATH}/equipo/fundadores_felipe_elisa.jpg`,
    familia: `${BASE_PATH}/equipo/fundadores_familia.jpg`,
    elisaEquipo: `${BASE_PATH}/equipo/equipo_elisa_trabajadoras.jpg`,
    felipeBeneficio: `${BASE_PATH}/equipo/equipo_felipe_beneficio.jpg`,
  },
  tostadora: {
    frontal: `${BASE_PATH}/tostadora/stronghold_s8x_frontal.jpg`,
    lateral: `${BASE_PATH}/tostadora/stronghold_s8x_lateral.jpg`,
  },
  lifestyle: {
    bolsasTaza: `${BASE_PATH}/lifestyle/lifestyle_bolsas_taza.png`,
  },
  testimonios: {
    wbc2019: `${BASE_PATH}/testimonios/wbc_2019_championship.jpg`,
  },
  sostenibilidad: {
    ganado: `${BASE_PATH}/sostenibilidad/biodiversidad_ganado.jpg`,
    panoramica: `${BASE_PATH}/sostenibilidad/finca_vista_panoramica.jpg`,
  },
};

export const PRODUCTS = [
  {
    id: 'legendary-geisha',
    name: 'LEGENDARY Geisha',
    nameJp: 'レジェンダリー ゲイシャ',
    tier: 'Legendary',
    price: 12800,
    comparePrice: 14800,
    weight: '340g',
    process: 'Lactic Process',
    processJp: '乳酸発酵',
    altitude: '1,760 m',
    notes: 'Bursting with ripe citrus, exotic stone fruits, and jasmine perfume',
    notesJp: '熟したシトラス、エキゾチックな核果、ジャスミンの香り',
    image: ASSETS.productos.legendary,
    imageHover: ASSETS.productos.legendaryHover,
    tag: '最高級',
    color: 'bg-[#1a1a1a]',
    stock: 12,
    badge: '限定リリース',
    scaScore: '90+',
  },
  {
    id: 'geisha-single',
    name: 'GEISHA',
    nameJp: 'ゲイシャ',
    tier: 'Heroes',
    price: 9800,
    comparePrice: null,
    weight: '340g',
    process: 'Bio-Washed',
    processJp: 'バイオウォッシュド',
    altitude: '1,763 m',
    notes: 'Blood orange, night-blooming jasmine, and crystallized honey',
    notesJp: 'ブラッドオレンジ、夜咲くジャスミン、結晶化した蜂蜜',
    image: ASSETS.productos.geisha,
    imageHover: ASSETS.productos.geishaHover,
    tag: 'シングルオリジン',
    color: 'bg-[#6b4a4a]',
    stock: 45,
    badge: null,
    scaScore: '88',
  },
  {
    id: 'sidra',
    name: 'SIDRA',
    nameJp: 'シドラ',
    tier: 'Heroes',
    price: 8200,
    comparePrice: null,
    weight: '340g',
    process: 'Lactic',
    processJp: '乳酸発酵',
    altitude: '1,750 m',
    notes: 'Strawberry yogurt, roses, creamy body — WBC 2019 Champion Varietal',
    notesJp: 'ストロベリーヨーグルト、バラ、クリーミー — WBC 2019 チャンピオン品種',
    image: ASSETS.productos.sidra,
    imageHover: ASSETS.productos.sidraHover,
    tag: 'WBC 2019 優勝',
    color: 'bg-[#6b4a4a]',
    stock: 38,
    badge: '人気No.1',
    scaScore: '89',
  },
  {
    id: 'palma-blend',
    name: 'PALMA Blend',
    nameJp: 'パルマ ブレンド',
    tier: 'Warrior',
    price: 6200,
    comparePrice: null,
    weight: '340g',
    process: 'Honey',
    processJp: 'ハニープロセス',
    altitude: '1,700 m',
    notes: 'Caramel, milk chocolate, roasted almonds, brown sugar',
    notesJp: 'キャラメル、ミルクチョコレート、ローストアーモンド',
    image: ASSETS.productos.palma,
    imageHover: ASSETS.productos.palmaHover,
    tag: '毎日の贅沢',
    color: 'bg-[#f5e6d3]',
    stock: 120,
    badge: null,
    scaScore: '86',
  },
  {
    id: 'tucan-blend',
    name: 'TUCÁN Blend',
    nameJp: 'トゥカン ブレンド',
    tier: 'Warrior',
    price: 6800,
    comparePrice: null,
    weight: '340g',
    process: 'Traditional & Exotic',
    processJp: '伝統と革新',
    altitude: '1,700 m',
    notes: 'Strawberry, passion fruit, tangerine, cocoa nibs',
    notesJp: 'ストロベリー、パッションフルーツ、みかん、カカオニブ',
    image: ASSETS.productos.tucan,
    imageHover: ASSETS.productos.tucanHover,
    tag: 'エキゾチック',
    color: 'bg-[#d4727a]',
    stock: 95,
    badge: null,
    scaScore: '87',
  },
];

export const PROCESS_STEPS = [
  { step: 1, title: 'Nursery', titleJp: '育苗', description: 'Seeds germinate in our nursery for 6-8 months', descriptionJp: '苗床で6〜8ヶ月間、種から丁寧に育てます', image: ASSETS.proceso.vivero },
  { step: 2, title: 'Planting', titleJp: '植付け', description: 'Transplanted to shade-grown lots at 1,700m', descriptionJp: '標高1,700mの雲霧林に移植します', image: ASSETS.proceso.cultivo },
  { step: 3, title: 'Cultivation', titleJp: '栽培', description: '3-4 years of careful growth under forest canopy', descriptionJp: '原生林の木陰で3〜4年、丹念に育成', image: ASSETS.proceso.cultivo },
  { step: 4, title: 'Harvest', titleJp: '収穫', description: 'Hand-picked at peak ripeness, cherry by cherry', descriptionJp: '完熟を見極め、一粒ずつ手摘みで収穫', image: ASSETS.proceso.cereza },
  { step: 5, title: 'Fermentation', titleJp: '発酵', description: 'Proprietary lactic & bio-innovation processes', descriptionJp: '独自の乳酸発酵とバイオイノベーション製法', image: ASSETS.proceso.fermentacion },
  { step: 6, title: 'Drying', titleJp: '乾燥', description: 'African raised beds for 15-25 days of controlled drying', descriptionJp: 'アフリカンベッドで15〜25日間、丁寧に乾燥', image: ASSETS.proceso.secado },
  { step: 7, title: 'Roasting', titleJp: '焙煎', description: 'Same hands that grew it, roast it fresh for you', descriptionJp: '育てた同じ手で、あなたのために新鮮焙煎', image: ASSETS.proceso.tostadora },
];

export const SUSTAINABILITY_STATS = [
  { value: '11,418', label: 'Tons CO₂ Captured', labelJp: 'トンCO₂吸収', icon: 'tree' },
  { value: '55+', label: 'Species on Farm', labelJp: '種の生物多様性', icon: 'bird' },
  { value: '9%', label: 'Soil Organic Matter', labelJp: '土壌有機物', icon: 'leaf' },
  { value: '200+', label: 'Neighbor Families', labelJp: '契約農家', icon: 'users' },
];

export const SHIPPING = {
  freeShippingThreshold: 10000,
  standardShipping: { price: 1200, days: '7-10営業日', description: '国際航空便' },
  expressShipping: { price: 2500, days: '3-5営業日', description: 'DHL Express' },
  zones: ['日本全国'],
  fulfillmentLocation: 'コロンビアより直送',
  roastedFresh: '発送48時間以内に焙煎',
};

export const TRUST_BADGES = [
  { icon: 'shield', text: '安全なお支払い' },
  { icon: 'truck', text: '¥10,000以上送料無料' },
  { icon: 'refresh', text: '30日間返金保証' },
  { icon: 'award', text: '受賞歴あり' },
];

export const SOCIAL_PROOF = {
  customersServed: '2,500+',
  countriesShipped: 12,
  avgRating: 4.9,
  totalReviews: 847,
  featuredIn: ['World Barista Championship', 'Perfect Daily Grind', 'Sprudge'],
};

export const REVIEWS = [
  { name: '田中 K.', location: '東京', rating: 5, product: 'SIDRA', text: '今まで飲んだ中で最も複雑な一杯。ストロベリーの風味が素晴らしい。', date: '2週間前', verified: true },
  { name: '佐藤 M.', location: '京都', rating: 5, product: 'LEGENDARY Geisha', text: '価格以上の価値あり。スペシャルティコーヒーの真髄を味わえます。', date: '1ヶ月前', verified: true },
  { name: '山田 Y.', location: '大阪', rating: 5, product: 'PALMA Blend', text: '毎日飲みたくなる完璧なコーヒー。滑らかでチョコレートのような風味。', date: '3週間前', verified: true },
];

export const SEO = {
  title: 'La Palma & El Tucán | コロンビア産地直送スペシャルティコーヒー',
  description: '雲霧林の農園から直接焙煎。ゲイシャ、シドラなど希少品種をお届け。',
  keywords: 'スペシャルティコーヒー, コロンビアコーヒー, ゲイシャコーヒー',
  ogImage: ASSETS.hero.banner,
  canonical: 'https://fsardi19.github.io/lpet-roasted-japan/',
};

export const COPY_JP = {
  hero: {
    tagline: '雲霧林から届く',
    headline: '職人の一杯',
    subheadline: 'コロンビアの雲霧林、標高1,700m。\n種から焙煎まで、すべて私たちの手で。',
    cta: '今すぐ購入',
    trustLine: '発送48時間以内焙煎 | 産地直送',
  },
  producerAdvantage: {
    title: 'なぜ生産者が焙煎するのか',
    subtitle: '私たちだけが知る、このコーヒーの真実',
    points: [
      { title: 'テロワールを知る', description: '土壌、気候、微生物。育てた者だけが知る風味の源。' },
      { title: '品種の声を聴く', description: 'ゲイシャ、シドラ、ブルボン。各品種に最適な焙煎曲線を。' },
      { title: '発酵を理解する', description: '乳酸発酵、バイオイノベーション。処理方法に応じた焙煎。' },
      { title: '単一区画の追跡', description: 'シングルオリジンではなく、シングルプロット。' },
    ],
  },
  footer: {
    tagline: '種から焙煎まで。一つの農園。一つのチーム。',
    contact: 'お問い合わせ',
    shipping: '配送について',
    returns: '返品について',
  },
};
