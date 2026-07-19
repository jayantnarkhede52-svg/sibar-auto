# SIBAR AUTO PARTS LIMITED — Official Website

Official website repository for **SIBAR Auto Parts Limited** (BSE Listed: `520141`), a leading manufacturer of precision aluminium castings, gravity & low pressure die castings, and machined automotive components since 1983.

## 🚀 Quick Start (Local Development)

To run the website locally on localhost:

```bash
# Using Node.js / npx
npx serve -s . -l 3000

# Or using npm scripts
npm start
```

Then open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Deployment Instructions

This repository is pre-configured with security headers, clean URLs, cache rules, and SEO meta tags for 1-click deployment on all major cloud hosts:

### 1. Vercel Deployment
- Import this GitHub repository into Vercel.
- Framework Preset: **Other** / **Static**
- Root Directory: `./`
- Click **Deploy**. `vercel.json` automatically handles clean URLs and security headers.

### 2. Netlify Deployment
- Connect repository in Netlify dashboard.
- Publish directory: `.`
- Click **Deploy Site**. `netlify.toml` handles routing and asset compression headers.

### 3. Cloudflare Pages
- Connect GitHub repository to Cloudflare Pages.
- Build command: *(leave empty)*
- Build output directory: `.`
- Security headers in `_headers` will be applied automatically.

### 4. GitHub Pages
- Go to repository **Settings** -> **Pages**.
- Source: Deploy from branch (`main` / root `/`).
- Save.

---

## 📁 Repository Structure

```
SIBAR AUTO WEBSITE/
├── assets/                  # High-resolution logos, product images, and annual report PDFs
│   ├── favicon.png
│   ├── sibar logo.png
│   ├── images/
│   └── 2018.pdf ... 2025.pdf
├── investor/                # Investor Relations portal & BSE compliance pages
│   ├── index.html
│   ├── annual-reports.html
│   ├── corporate-information.html
│   ├── financial-results.html
│   ├── help-desk.html
│   ├── investor-relations.html
│   ├── investor-watch-out.html
│   ├── notice-to-shareholders.html
│   └── shareholding-pattern.html
├── index.html               # Main Homepage
├── about.html               # Corporate History & Management
├── products.html            # Casting & Machining Product Catalog
├── awards.html               # Excellence & Certification Awards
├── contact.html            # Tirupati Plant Inquiry & FAQ Form
├── script.js                # Core Interactive JS (Counters, Scroll Reveal, Mobile Menu)
├── style.css               # Modern Glassmorphism & Responsive Design System
├── robots.txt               # Search engine directives
├── sitemap.xml              # XML Sitemap for search crawlers
├── vercel.json              # Vercel deployment configuration
├── netlify.toml             # Netlify deployment configuration
├── _headers                 # Cloudflare/Netlify security headers
├── site.webmanifest         # Web App Manifest
└── package.json             # NPM package declaration
```

---

## 🔒 Security & Performance Features

- **Security Headers**: `X-Frame-Options`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`
- **SEO & Social Cards**: Pre-configured `og:image`, `og:title`, `twitter:card`, and canonical tags across all pages
- **Performance**: Preconnected Google Fonts, immutable asset caching headers for fast load times
