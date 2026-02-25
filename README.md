# Savor Landing

React implementation of the Savor app design from [Figma (Designs - Savor, node 206-12626)](https://www.figma.com/design/7Ofvgv0XWWZykY1RsCWn1r/Designs---Savor?node-id=206-12626).

## Design system

Design tokens live in **`design-system.json`** so future screens stay consistent with Figma. It includes:

- **Colors** — Text, primary (Orange), icons, borders (from Figma variables)
- **Typography** — Font families (DM Sans, DM Serif Display), sizes, weights
- **Spacing** — 0–120px scale
- **Border radius** — sm, md, lg, xl, 2xl, full
- **Component rules** — Search bar, buttons, cards, avatar, nav

CSS variables in `src/index.css` are derived from this file.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Stack

- React 18
- Vite 6
- Plain CSS (design tokens in `design-system.json` + `:root` in `index.css`)
