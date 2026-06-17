# Mr. Parveen Kumar — Portfolio

Personal portfolio of **Mr. Parveen Kumar** (web developer, Meta Ads manager, AI
automation). Built with **React + Vite + Tailwind CSS v4**.

## 🚀 Run locally

```bash
npm install     # first time only
npm run dev      # start dev server → http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot-reload (http://localhost:5173) |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |

Stop the dev server with **Ctrl + C**.

## 🧱 Tech stack

- **React 19** + **react-router-dom 7** (routes: `/`, `/about`, `/projects`)
- **Vite 6** (dev server + build)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no CDN)
- **lucide-react** for icons

## 📁 Structure

```
.
├── index.html               # Vite entry (SEO meta + favicon)
├── vite.config.js
├── public/                  # static assets served as-is
│   ├── favicon.svg
│   ├── main-image.png
│   └── assets/…             # logos + project screenshots
└── src/
    ├── main.jsx             # app bootstrap (BrowserRouter)
    ├── App.jsx              # routes
    ├── index.css            # Tailwind import + custom animations
    ├── components/          # Navbar, Footer, ContactModal, ContactButtons, Layout
    ├── pages/               # Home, About, Projects
    ├── data/                # content as data (services, projects, skills, timeline, contact)
    └── hooks/               # useTypewriter, useScrollReveal, usePageMeta
```

Content lives in `src/data/` — to add a project, skill, or timeline entry, edit the
relevant array there instead of touching JSX.

## 🌍 Deploying

This is a single-page app. On static hosts, add a catch-all rewrite to `index.html`
so deep links like `/about` don't 404 on refresh:

- **Vercel / Netlify** — handled automatically.
- **GitHub Pages** — needs a SPA fallback (copy `index.html` to `404.html`) and a
  `base` set in `vite.config.js` if served from a sub-path.

## 🗄️ Legacy

The original plain HTML/CSS/JS version is preserved in `legacy-static-site/`
(git-ignored). Delete that folder once you're confident you no longer need it.

## 📧 Contact

**Email:** themr.mourya@gmail.com · **Phone:** +91 9878878535
