# lauravicgal.art

Personal website for Laura Vicente, a watercolor artist, wedding officiant, and creative workshop facilitator based in the NY/NJ area.

**Live site:** [lauravicgal.art](https://lauravicgal.art)

## Stack

- [Astro](https://astro.build) (static site)
- [Tailwind CSS v4](https://tailwindcss.com)
- Bilingual support (EN/ES) via client-side language toggle
- Deployed on Netlify with `@astrojs/sitemap`

## Pages

| Route          | Description                              |
|----------------|------------------------------------------|
| `/`            | Home — hero, services preview, testimonials, CTA |
| `/about`       | Bio and background                       |
| `/gallery`     | Image gallery of artwork                 |
| `/commissions` | Custom artwork pricing and FAQ           |
| `/events`      | Wedding ceremony packages                |
| `/workshops`   | Art workshop offerings                   |
| `/contact`     | Contact information                      |

## Project Structure

```
src/
├── components/     # Reusable Astro components (Header, Footer, Gallery, etc.)
├── content/        # JSON content collections (ceremonies, workshops, FAQ)
├── i18n/           # Translation strings (EN/ES)
├── layouts/        # Base page layout
├── pages/          # Route pages
└── styles/         # Global CSS
public/images/      # Static image assets
```

## Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```
