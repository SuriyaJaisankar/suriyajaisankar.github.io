# Suriya Jaisankar — Portfolio

Personal portfolio site — Next.js 14 (App Router) + Tailwind CSS, static-exported for GitHub Pages.

## Local dev

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)

```bash
npm run build      # emits static site to ./out
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (e.g. `SuriyaJaisankar/portfolio`).
2. **Settings → Pages** → set *Source* to **GitHub Actions**.
3. **Settings → Secrets and variables → Actions → Variables** — if you're hosting under a project page (e.g. `username.github.io/portfolio`), add a repo variable:
   - `NEXT_PUBLIC_BASE_PATH = /portfolio`
   For a user site at `suriyajaisankar.github.io`, leave this variable unset.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Editing content

All copy lives in **[lib/content.ts](lib/content.ts)** — bio, socials, experience, projects, skills, certifications. Edit that one file to update the site.

## Structure

```
app/
  layout.tsx        # root layout, header + footer
  page.tsx          # composes the section components
  globals.css       # Tailwind + a few utility classes
components/
  Header.tsx  Footer.tsx
  Hero.tsx    About.tsx  Experience.tsx
  Projects.tsx  Skills.tsx  Certifications.tsx
  Blog.tsx    Contact.tsx
lib/content.ts      # single source of truth for site content
next.config.mjs     # static-export config with GH Pages basePath
```
