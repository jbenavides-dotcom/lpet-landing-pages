# Checklist SEO + GEO - La Palma & El Tucán
## Para Desarrollador Web

> **Sitio:** Shopify → www.lapalmayeltucan.com
> **Fecha:** 5 Marzo 2026
> **Tiempo estimado:** 20-24 horas

---

## RESUMEN DE TAREAS

| # | Tarea | Tiempo |
|---|-------|--------|
| 1 | Meta Tags | 30 min |
| 2 | Product Schema (JSON-LD) | 2 hrs |
| 3 | Organization Schema | 1 hr |
| 4 | Trust Badges | 1 hr |
| 5 | Reviews Section | 2 hrs |
| 6 | Open Graph + Twitter | 30 min |
| 7 | Hreflang | 1 hr |
| 8 | robots.txt | 30 min |
| 9 | Core Web Vitals | 2 hrs |
| 10 | FAQ Schema | 2 hrs |
| 11 | Speakable Schema | 1 hr |
| 12 | About Page | 2 hrs |
| 13 | Stats Section | 1 hr |
| 14 | Comparison Table | 1 hr |
| 15 | Knowledge Graph | 2 hrs |

---

# IMPLEMENTACIÓN

---

## 1. META TAGS

### Homepage
```html
<title>La Palma & El Tucán | Same Hands, Seed to Cup - Colombian Specialty Coffee</title>
<meta name="description" content="The coffee we grow is the coffee we roast. Colombian specialty coffee from a single estate, shipped within 48 hours of roasting.">
<link rel="canonical" href="https://www.lapalmayeltucan.com/">
```

### Páginas de Producto
```html
<title>{{ product.title }} - {{ product.metafields.custom.tasting_notes }} | La Palma & El Tucán</title>
<meta name="description" content="{{ product.metafields.custom.tasting_notes }}. Single estate Colombian coffee, roasted and shipped within 48 hours. {{ product.price | money }}.">
```

---

## 2. PRODUCT SCHEMA

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{ product.title }}",
  "image": ["{{ product.featured_image | img_url: 'grande' }}"],
  "description": "{{ product.description | strip_html | escape }}",
  "sku": "{{ product.selected_or_first_available_variant.sku }}",
  "brand": {
    "@type": "Brand",
    "name": "La Palma & El Tucán"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "La Palma & El Tucán",
    "description": "Single-estate Colombian coffee farm that grows, processes, and roasts its own coffee"
  },
  "offers": {
    "@type": "Offer",
    "url": "{{ shop.url }}{{ product.url }}",
    "priceCurrency": "USD",
    "price": "{{ product.price | money_without_currency | remove: ',' }}",
    "availability": "{% if product.available %}https://schema.org/InStock{% else %}https://schema.org/OutOfStock{% endif %}",
    "priceValidUntil": "2026-12-31",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 2,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 5,
          "maxValue": 8,
          "unitCode": "DAY"
        }
      }
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}
</script>
```

---

## 3. ORGANIZATION SCHEMA

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "La Palma & El Tucán",
  "alternateName": ["LP&ET", "La Palma y El Tucan"],
  "url": "https://www.lapalmayeltucan.com",
  "logo": "https://www.lapalmayeltucan.com/logo.png",
  "description": "Single-estate Colombian coffee producer. We grow, process, and roast our own specialty coffee - the same team from seed to cup.",
  "foundingDate": "2012",
  "founders": [
    {"@type": "Person", "name": "Felipe Sardi"},
    {"@type": "Person", "name": "Elisa Madriñán"}
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zipacón",
    "addressRegion": "Cundinamarca",
    "addressCountry": "CO"
  },
  "sameAs": [
    "https://www.instagram.com/lapalmayeltucan",
    "https://www.facebook.com/lapalmayeltucan",
    "https://www.linkedin.com/company/la-palma-y-el-tucan"
  ]
}
</script>
```

---

## 4. TRUST BADGES

```html
<section class="trust-bar">
  <div class="trust-item">
    <span>Free Shipping $50+</span>
  </div>
  <div class="trust-item">
    <span>Roasted Within 48hrs of Shipping</span>
  </div>
  <div class="trust-item">
    <span>30-Day Satisfaction Guarantee</span>
  </div>
  <div class="trust-item">
    <span>★★★★★ 4.9/5 (847 reviews)</span>
  </div>
</section>
```

```css
.trust-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: #f8f7f5;
  border-bottom: 1px solid #e5e5e5;
}

.trust-item {
  font-size: 0.875rem;
  color: #2d5a3d;
  font-weight: 500;
}
```

---

## 5. REVIEWS SECTION

Instalar **Judge.me** o **Yotpo** para reviews automáticos.

```html
<section class="reviews-section">
  <div class="reviews-header">
    <h2>What Coffee Lovers Say</h2>
    <div class="reviews-summary">
      <span class="rating-stars">★★★★★</span>
      <span class="rating-number">4.9/5</span>
      <span class="review-count">Based on 847 reviews</span>
    </div>
  </div>

  <div class="reviews-grid">
    <div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"The Sidra is creamy, fruity, and unlike anything I've had from my local roaster."</p>
      <div class="review-author">
        <strong>Michael T.</strong>
        <span class="verified">Verified Buyer</span>
      </div>
    </div>

    <div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"It arrived fresher than anything from my local shop. The roast date was 3 days before it reached me."</p>
      <div class="review-author">
        <strong>Sarah K.</strong>
        <span class="verified">Verified Buyer</span>
      </div>
    </div>

    <div class="review-card">
      <div class="review-stars">★★★★★</div>
      <p class="review-text">"Every bag is consistent, fresh, and the tasting notes are accurate."</p>
      <div class="review-author">
        <strong>David L.</strong>
        <span class="verified">Verified Buyer</span>
      </div>
    </div>
  </div>
</section>
```

---

## 6. OPEN GRAPH + TWITTER

```html
<meta property="og:site_name" content="La Palma & El Tucán">
<meta property="og:type" content="{% if template contains 'product' %}product{% else %}website{% endif %}">
<meta property="og:title" content="{{ page_title }}">
<meta property="og:description" content="Same hands, seed to cup. Colombian specialty coffee grown, processed, and roasted by the same team.">
<meta property="og:url" content="{{ canonical_url }}">
<meta property="og:image" content="{{ 'og-default.jpg' | asset_url }}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@lapalmayeltucan">
<meta name="twitter:title" content="{{ page_title }}">
<meta name="twitter:description" content="The coffee we grow is the coffee we roast. True farm-to-cup from Colombia.">
```

---

## 7. HREFLANG

```html
<link rel="alternate" hreflang="en-US" href="https://www.lapalmayeltucan.com{{ request.path }}">
<link rel="alternate" hreflang="ja-JP" href="https://www.lapalmayeltucan.com/ja{{ request.path }}">
<link rel="alternate" hreflang="ko-KR" href="https://www.lapalmayeltucan.com/ko{{ request.path }}">
<link rel="alternate" hreflang="x-default" href="https://www.lapalmayeltucan.com{{ request.path }}">
```

---

## 8. ROBOTS.TXT

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /cart
Disallow: /checkout
Disallow: /account

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://www.lapalmayeltucan.com/sitemap.xml
```

---

## 9. CORE WEB VITALS

```html
<!-- Lazy loading en imágenes -->
<img src="{{ image | img_url: 'medium' }}" loading="lazy" decoding="async" width="400" height="500">

<!-- Preload hero image -->
<link rel="preload" as="image" href="{{ 'hero.jpg' | asset_url }}">

<!-- Preconnect fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Defer JS -->
<script src="{{ 'theme.js' | asset_url }}" defer></script>
```

**Targets:** LCP < 2.5s | FID < 100ms | CLS < 0.1

---

## 10. FAQ SCHEMA

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes La Palma & El Tucán coffee different?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Palma & El Tucán is a single-estate Colombian coffee producer where the same team that grows the coffee also processes and roasts it. This complete control from seed to cup is rare in specialty coffee. Our coffee is roasted on the farm and shipped within 48 hours."
      }
    },
    {
      "@type": "Question",
      "name": "How fresh is La Palma & El Tucán coffee when it arrives?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All coffee is roasted within 48 hours of shipping. Orders to the USA typically arrive 5-8 days after roasting. Every bag shows the exact roast date."
      }
    },
    {
      "@type": "Question",
      "name": "Who founded La Palma & El Tucán?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Palma & El Tucán was founded in 2012 by Felipe Sardi and Elisa Madriñán in Zipacón, Cundinamarca, Colombia. The farm sits at 1,700 meters altitude in a cloud forest ecosystem."
      }
    },
    {
      "@type": "Question",
      "name": "What coffee varieties does La Palma & El Tucán grow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cultivate Geisha, Sidra, Java, Bourbon, Mokka, Pacamara, Typica, and Tabi. Each variety is processed using proprietary fermentation methods developed over 12+ years."
      }
    },
    {
      "@type": "Question",
      "name": "Does La Palma & El Tucán ship internationally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We ship to the United States (free shipping over $50), Japan, South Korea, and other countries. All orders are roasted fresh and shipped directly from Colombia."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best coffee for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Palma Blend ($42) - balanced with notes of caramel, chocolate, and toasted almonds. For more adventurous palates, the Sidra ($55) offers a creamy, fruit-forward profile."
      }
    }
  ]
}
</script>
```

---

## 11. SPEAKABLE SCHEMA

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "La Palma & El Tucán - Colombian Specialty Coffee",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".speakable-intro", ".speakable-differentiator"]
  }
}
</script>
```

```html
<p class="speakable-intro">
  La Palma & El Tucán is a Colombian specialty coffee farm where the same team
  that grows the coffee also roasts it. Founded in 2012, the farm produces coffee
  that's roasted fresh and shipped within 48 hours.
</p>

<p class="speakable-differentiator">
  What makes La Palma & El Tucán unique is complete control from seed to cup.
  The same hands that planted the tree roast the beans and ship them to your door.
</p>
```

---

## 12. ABOUT PAGE

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Corporation",
    "name": "La Palma & El Tucán",
    "alternateName": ["LP&ET", "La Palma y El Tucan"],
    "description": "Single-estate Colombian specialty coffee producer with complete vertical integration from seed to cup.",
    "foundingDate": "2012",
    "foundingLocation": {
      "@type": "Place",
      "name": "Zipacón, Cundinamarca, Colombia"
    },
    "founders": [
      {"@type": "Person", "name": "Felipe Sardi", "jobTitle": "Co-Founder"},
      {"@type": "Person", "name": "Elisa Madriñán", "jobTitle": "Co-Founder"}
    ],
    "numberOfEmployees": {"@type": "QuantitativeValue", "value": 18},
    "areaServed": ["United States", "Japan", "South Korea"],
    "slogan": "Same Hands, Seed to Cup"
  }
}
</script>
```

### HTML About Page

```html
<article class="about-content">
  <h1>About La Palma & El Tucán</h1>

  <section class="key-message">
    <h2>Same Hands, Seed to Cup</h2>
    <p>We don't just know this coffee - we grew it, we processed it, we roasted it.
    No one else has touched it.</p>
  </section>

  <section class="key-facts">
    <h2>Key Facts</h2>
    <ul>
      <li><strong>Founded:</strong> 2012 by Felipe Sardi and Elisa Madriñán</li>
      <li><strong>Location:</strong> Zipacón, Cundinamarca, Colombia (1,700m altitude)</li>
      <li><strong>Farm Size:</strong> 19 hectares (13 under cultivation)</li>
      <li><strong>Team:</strong> 18 full-time employees</li>
      <li><strong>Varieties:</strong> Geisha, Sidra, Java, Bourbon, Mokka, Pacamara, Typica, Tabi</li>
      <li><strong>Freshness:</strong> Roasted and shipped within 48 hours</li>
      <li><strong>Community:</strong> 200+ partner families in Neighbors & Crops program</li>
      <li><strong>Fair Pay:</strong> 3x above national market price</li>
    </ul>
  </section>
</article>
```

---

## 13. STATS SECTION

```html
<section class="stats-section" id="facts">
  <h2>La Palma & El Tucán by the Numbers</h2>

  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-number">48</span>
      <span class="stat-label">hours from roast to ship</span>
    </div>

    <div class="stat-item">
      <span class="stat-number">2012</span>
      <span class="stat-label">year founded</span>
    </div>

    <div class="stat-item">
      <span class="stat-number">1,700m</span>
      <span class="stat-label">altitude in cloud forest</span>
    </div>

    <div class="stat-item">
      <span class="stat-number">200+</span>
      <span class="stat-label">partner farming families</span>
    </div>

    <div class="stat-item">
      <span class="stat-number">3x</span>
      <span class="stat-label">above market price paid</span>
    </div>

    <div class="stat-item">
      <span class="stat-number">8</span>
      <span class="stat-label">rare coffee varieties</span>
    </div>

    <div class="stat-item">
      <span class="stat-number">11,418</span>
      <span class="stat-label">tons CO2 captured</span>
    </div>
  </div>
</section>
```

---

## 14. COMPARISON TABLE

```html
<section class="comparison-section">
  <h2>Find Your Perfect Coffee</h2>

  <table class="comparison-table">
    <thead>
      <tr>
        <th>Coffee</th>
        <th>Taste Profile</th>
        <th>Best For</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Geisha</strong></td>
        <td>Floral, jasmine, bergamot, tropical fruit</td>
        <td>Special occasions, pour-over</td>
        <td>$65-85</td>
      </tr>
      <tr>
        <td><strong>Sidra</strong></td>
        <td>Creamy, strawberry yogurt, roses</td>
        <td>Adventurous coffee lovers</td>
        <td>$55</td>
      </tr>
      <tr>
        <td><strong>Palma Blend</strong></td>
        <td>Caramel, chocolate, toasted almonds</td>
        <td>Daily drinking, beginners</td>
        <td>$42</td>
      </tr>
      <tr>
        <td><strong>Tucán Blend</strong></td>
        <td>Strawberry, passion fruit, bright</td>
        <td>Fruity profile lovers</td>
        <td>$45</td>
      </tr>
    </tbody>
  </table>
</section>
```

---

## 15. KNOWLEDGE GRAPH

### Crear perfiles en:

1. **Google Business Profile** → business.google.com
   - Categoría: "Coffee Roaster"

2. **Wikidata** → wikidata.org
   - Crear entrada con: founders, location, founding date

3. **Crunchbase** → crunchbase.com

4. **LinkedIn Company Page** → Completar 100%

---

# CHECKLIST FINAL

## SEO
- [ ] Meta title < 60 caracteres
- [ ] Meta description < 155 caracteres
- [ ] Product Schema en productos
- [ ] Organization Schema en homepage
- [ ] Trust badges visibles
- [ ] Reviews section
- [ ] Open Graph / Twitter Cards
- [ ] Hreflang tags
- [ ] robots.txt permite bots IA
- [ ] Core Web Vitals > 90

## GEO
- [ ] FAQ Schema
- [ ] Speakable Schema
- [ ] About Page completa
- [ ] Stats section
- [ ] Comparison table
- [ ] Google Business Profile
- [ ] Wikidata entry

---

## HERRAMIENTAS DE TESTING

| Herramienta | URL |
|-------------|-----|
| Rich Results Test | https://search.google.com/test/rich-results |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Facebook Debugger | https://developers.facebook.com/tools/debug/ |

---

## CONTACTO

**Felipe Sardi:** felipe@lapalmayeltucan.com

---

*Documento v3.0 - 5 Marzo 2026*
