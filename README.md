# Landing Pages - La Palma & El Tucán

Landing pages para e-commerce de café tostado. React + Vite + Tailwind CSS.

## Estructura

```
├── usa/          # Landing page mercado USA
├── japan/        # Landing page mercado Japón
├── docs/         # Documentación para desarrollo
```

## Stack Tecnológico

- **Framework:** React 19 + TypeScript
- **Build:** Vite 7.3
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React

## Instalación

```bash
# USA
cd usa
npm install
npm run dev

# Japón
cd japan
npm install
npm run dev
```

## URLs de Desarrollo

- USA: http://localhost:5173/lpet-roasted-series-usa/
- Japón: http://localhost:5173/lpet-roasted-japan/

## Estructura de Componentes

| Componente | Función |
|------------|---------|
| `AnnouncementBar` | Barra superior con promoción |
| `Header` | Navegación + CTA |
| `Hero` | Banner principal |
| `Products` | Grid de productos |
| `ProducerAdvantage` | Diferenciador "Same Hands, Seed to Cup" |
| `Process` | Proceso de cultivo a taza |
| `Story` | Historia de la finca |
| `Reviews` | Testimonios |
| `Sustainability` | Métricas ambientales |
| `Footer` | Links + contacto |
| `StickyCart` | CTA fijo al scroll |

## Imágenes (Cloudinary)

Las imágenes de productos usan **Cloudinary** para optimización automática.

**Cloud:** `dsylu9a7k`

URL base optimizada:
```
https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_800/
```

Para desarrollo local, puedes usar imágenes placeholder o descargar las originales de Cloudinary.

## Messaging Validado (IMPORTANTE)

**NO usar:**
- "50 metros de donde se cultiva"
- SCA scores como diferenciador principal
- Nombres de equipos (Stronghold S8X)

**SÍ usar:**
- "Same Hands, Seed to Cup"
- "Roasted within 48 hours of shipping"
- Reviews y social proof
- Transparencia (precio al productor, trazabilidad)

## SEO/GEO

Ver `docs/QUICK_WINS_SEO_GEO.md` para checklist de implementación SEO.

## Deploy

Cada landing tiene workflow de GitHub Actions para deploy a GitHub Pages.

```bash
npm run build
# Output en dist/
```

## Contacto

Felipe Sardi - felipe@lapalmayeltucan.com
