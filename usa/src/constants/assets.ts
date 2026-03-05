// Asset URLs - Shopify CDN + Cloudinary optimized
// Shopify CDN for banners, Cloudinary for product images
const SHOPIFY_CDN = 'https://3ys3kk1igt4wb33d-92559802671.shopifypreview.com/cdn/shop/files';
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dsylu9a7k/image/upload';
const CLOUDINARY_OPT = 'f_auto,q_auto,w_800';
const BASE_PATH = `${import.meta.env.BASE_URL}images`;

export const ASSETS = {
  // Logo
  logo: `${SHOPIFY_CDN}/Logo_principal.png`,

  // Hero images (Shopify CDN)
  hero: {
    banner: `${SHOPIFY_CDN}/banner_principal_e0139d1d-ba7d-4db7-a006-1c9cc416bd1b.jpg`,
    felipeCaballo: `${SHOPIFY_CDN}/DJI_0246_bcb04b78-b07a-4a3e-8804-63915ae01e25.jpg`,
    fincaBosque: `${SHOPIFY_CDN}/banner_2.jpg`,
    aerial: `${SHOPIFY_CDN}/2_38fb59ff-e556-4505-9d2a-954c07c34115.jpg`,
  },

  // Product images (Cloudinary optimized)
  productos: {
    legendary: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-usa/legendary.png`,
    legendaryFront: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-usa/legendary.png`,
    geisha: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-usa/sidra.png`,
    sidra: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-usa/sidra.png`,
    palmaBlend: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-usa/palma.png`,
    tucanBlend: `${CLOUDINARY_BASE}/${CLOUDINARY_OPT}/lpet-usa/tucan.png`,
    tresBolsas: `${BASE_PATH}/productos/ascca.png`,
  },

  // Process images
  proceso: {
    vivero: `${BASE_PATH}/proceso/proceso_02_vivero_secaderos.jpg`,
    cultivo: `${BASE_PATH}/proceso/proceso_01_cultivo_cafetales.jpg`,
    cereza: `${BASE_PATH}/proceso/proceso_03_cereza_madura.jpg`,
    secado: `${BASE_PATH}/proceso/proceso_04_secado_natural.jpg`,
    lavado: `${BASE_PATH}/proceso/proceso_05_lavado_washed.jpg`,
  },

  // Team/Origin images
  equipo: {
    fundadores: `${BASE_PATH}/equipo/fundadores_felipe_elisa.jpg`,
    familia: `${BASE_PATH}/equipo/fundadores_familia.jpg`,
    elisaEquipo: `${BASE_PATH}/equipo/equipo_elisa_trabajadoras.jpg`,
    felipeBeneficio: `${BASE_PATH}/equipo/equipo_felipe_beneficio.jpg`,
  },

  // Roaster images
  tostadora: {
    frontal: `${BASE_PATH}/tostadora/stronghold_s8x_frontal.jpg`,
    lateral: `${BASE_PATH}/tostadora/stronghold_s8x_lateral.jpg`,
  },

  // Lifestyle
  lifestyle: {
    bolsasTaza: `${BASE_PATH}/lifestyle/lifestyle_bolsas_taza.png`,
  },

  // Testimonials/Credentials
  testimonios: {
    wbc2019: `${BASE_PATH}/testimonios/wbc_2019_championship.jpg`,
  },

  // Sustainability
  sostenibilidad: {
    ganado: `${BASE_PATH}/sostenibilidad/biodiversidad_ganado.jpg`,
    panoramica: `${BASE_PATH}/sostenibilidad/finca_vista_panoramica.jpg`,
  },
};

// Product data with inventory and urgency
export const PRODUCTS = [
  {
    id: 'legendary-geisha',
    name: 'LEGENDARY Geisha',
    tier: 'Legendary',
    price: 85,
    comparePrice: 95, // Original price for strikethrough
    weight: '12oz (340g)',
    process: 'Lactic Process',
    altitude: '1,760 m.a.s.l.',
    notes: 'Bursting with ripe citrus, exotic stone fruits, and jasmine perfume',
    image: ASSETS.productos.legendary,
    tag: 'ULTRA PREMIUM',
    color: 'bg-brand-dark',
    stock: 12, // Limited stock for urgency
    badge: 'Limited Release',
    scaScore: '90+',
  },
  {
    id: 'geisha-single',
    name: 'GEISHA',
    tier: 'Heroes',
    price: 65,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Bio-Washed',
    altitude: '1,763 m.a.s.l.',
    notes: 'Blood orange, night-blooming jasmine, and crystallized honey',
    image: ASSETS.productos.sidra,
    tag: 'SINGLE ORIGIN',
    color: 'bg-brand-pink',
    stock: 45,
    badge: null,
    scaScore: '88',
  },
  {
    id: 'sidra',
    name: 'SIDRA',
    tier: 'Heroes',
    price: 55,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Lactic',
    altitude: '1,750 m.a.s.l.',
    notes: 'Strawberry yogurt, roses, creamy body — WBC 2019 Champion Varietal',
    image: ASSETS.productos.sidra,
    tag: 'WBC 2019 WINNER',
    color: 'bg-brand-pink',
    stock: 38,
    badge: 'Best Seller',
    scaScore: '89',
  },
  {
    id: 'palma-blend',
    name: 'PALMA Blend',
    tier: 'Warrior',
    price: 42,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Honey',
    altitude: '1,700 m.a.s.l.',
    notes: 'Caramel, milk chocolate, roasted almonds, brown sugar',
    image: ASSETS.productos.palmaBlend,
    tag: 'EVERYDAY LUXURY',
    color: 'bg-brand-beige',
    stock: 120,
    badge: null,
    scaScore: '86',
  },
  {
    id: 'tucan-blend',
    name: 'TUCÁN Blend',
    tier: 'Warrior',
    price: 45,
    comparePrice: null,
    weight: '12oz (340g)',
    process: 'Traditional & Exotic Varieties',
    altitude: '1,700 m.a.s.l.',
    notes: 'Strawberry, passion fruit, tangerine, cocoa nibs',
    image: ASSETS.productos.tucanBlend,
    tag: 'EXOTIC BLEND',
    color: 'bg-brand-pink',
    stock: 95,
    badge: null,
    scaScore: '87',
  },
];

// Process steps - CORRECTED ORDER
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Nursery',
    titleEs: 'Germinado',
    description: 'Seeds germinate in our nursery for 6-8 months before transplanting',
    image: ASSETS.proceso.vivero,
  },
  {
    step: 2,
    title: 'Planting',
    titleEs: 'Plantación',
    description: 'Young plants transplanted to shade-grown lots at 1,700m elevation',
    image: ASSETS.proceso.cultivo,
  },
  {
    step: 3,
    title: 'Cultivation',
    titleEs: 'Cultivo',
    description: '3-4 years of careful growth under native forest canopy',
    image: ASSETS.proceso.cultivo,
  },
  {
    step: 4,
    title: 'Harvest',
    titleEs: 'Cosecha',
    description: 'Hand-picked at peak ripeness, cherry by cherry',
    image: ASSETS.proceso.cereza,
  },
  {
    step: 5,
    title: 'Fermentation',
    titleEs: 'Fermentación',
    description: 'Proprietary processes: Lactic, Bio-Innovation, pH Clarity',
    image: ASSETS.proceso.lavado,
  },
  {
    step: 6,
    title: 'Drying',
    titleEs: 'Secado',
    description: 'African raised beds for 15-25 days of controlled drying',
    image: ASSETS.proceso.secado,
  },
  {
    step: 7,
    title: 'Roasting',
    titleEs: 'Tostión',
    description: 'Same hands that grew it, roast it fresh for you',
    image: ASSETS.tostadora.frontal,
  },
];

// Sustainability stats
export const SUSTAINABILITY_STATS = [
  { value: '11,418', label: 'Tons CO₂ Captured', icon: 'tree' },
  { value: '55+', label: 'Species on Farm', icon: 'bird' },
  { value: '9%', label: 'Soil Organic Matter', icon: 'leaf' },
  { value: '200+', label: 'Neighbor Families', icon: 'users' },
];

// Shipping configuration for USA
export const SHIPPING = {
  freeShippingThreshold: 50, // USD
  standardShipping: {
    price: 8,
    days: '5-7 business days',
    description: 'USPS Priority Mail',
  },
  expressShipping: {
    price: 15,
    days: '2-3 business days',
    description: 'USPS Express',
  },
  zones: ['All 50 US States', 'Puerto Rico'],
  fulfillmentLocation: 'Ships from Miami, FL',
  roastedFresh: 'Roasted within 48 hours of shipping',
};

// Trust badges
export const TRUST_BADGES = [
  { icon: 'shield', text: 'Secure Checkout' },
  { icon: 'truck', text: 'Free Shipping $50+' },
  { icon: 'refresh', text: '30-Day Guarantee' },
  { icon: 'award', text: 'Award-Winning Farm' },
];

// Social proof
export const SOCIAL_PROOF = {
  customersServed: '2,500+',
  countriesShipped: 12,
  avgRating: 4.9,
  totalReviews: 847,
  featuredIn: ['Sprudge', 'Perfect Daily Grind', 'Barista Magazine'],
};

// Reviews (sample)
export const REVIEWS = [
  {
    name: 'Michael T.',
    location: 'Portland, OR',
    rating: 5,
    product: 'SIDRA',
    text: 'The most complex cup I\'ve ever had at home. The strawberry notes are incredible.',
    date: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Sarah K.',
    location: 'Austin, TX',
    rating: 5,
    product: 'LEGENDARY Geisha',
    text: 'Worth every penny. This is what specialty coffee should taste like.',
    date: '1 month ago',
    verified: true,
  },
  {
    name: 'James L.',
    location: 'Seattle, WA',
    rating: 5,
    product: 'PALMA Blend',
    text: 'Perfect everyday coffee. Smooth, chocolatey, never bitter.',
    date: '3 weeks ago',
    verified: true,
  },
];

// SEO data
export const SEO = {
  title: 'La Palma & El Tucán | Producer-Roasted Specialty Coffee from Colombia',
  description: 'Same hands that grow it, roast it fresh for you. Award-winning Colombian specialty coffee shipped within 48hrs. Geisha, Sidra & rare varieties.',
  keywords: 'specialty coffee, Colombian coffee, Geisha coffee, single origin coffee, producer roasted, farm to cup, La Palma El Tucan',
  ogImage: ASSETS.hero.banner,
  canonical: 'https://shop.lapalmayeltucan.com',
};
