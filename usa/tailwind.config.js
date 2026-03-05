/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - La Palma & El Tucán (from Shopify site)
        'brand-pink': '#E11D48',      // Accent/pricing (rose-600)
        'brand-gold': '#8B7355',      // Secondary accent
        'brand-beige': '#D4C5B0',     // Light accent
        'brand-green': '#2D5A3D',     // Nature/sustainability
        // Extended palette
        'brand-dark': '#2C2D2E',      // Primary text
        'brand-cream': '#F6F6F6',     // Footer/light bg
        'brand-rose': '#E11D48',      // CTA buttons
        'brand-border': '#E0E6F4',    // Borders
      },
      fontFamily: {
        'display': ['Tenor Sans', 'serif'],
        'body': ['Jost', 'sans-serif'],
      },
      borderRadius: {
        'brand': '6px',
        'media': '20px',
      },
    },
  },
  plugins: [],
}
