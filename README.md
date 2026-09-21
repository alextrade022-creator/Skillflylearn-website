# Skillfly Learning Platform — React + Tailwind

A responsive rebuild of the Skillfly marketing website (a Calicut-based training
academy for Digital Marketing, HR and Foreign Accounting) using **React**,
**Vite** and **Tailwind CSS v4**.

This project is a refactor of the original single-file `Skillfly Website.dc.html`
built on a proprietary "DC" component framework. The content, layout and visual
design have been preserved while the code has been reorganised into idiomatic,
reusable React components with a conventional folder structure.

## Tech stack

| Concern     | Choice                          |
| ----------- | ------------------------------- |
| Framework   | React 18                        |
| Build tool  | Vite 5                          |
| Styling     | Tailwind CSS v4 (`@theme` tokens) |
| Routing     | React Router v6                 |
| Fonts       | Outfit (display), Manrope (body) |

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:5173
npm run build   # production build into dist/
npm run preview # preview the production build
```

## Project structure

```
skillfly-react/
├── public/
│   ├── assets/           # logo and static images
│   └── uploads/          # brochures (PDF) and uploaded media
├── src/
│   ├── components/
│   │   ├── layout/       # Header, Footer, Layout shell, WhatsApp button, ScrollToTop
│   │   ├── ui/           # Reusable primitives: Button, Container, ImageSlot,
│   │   │                 #   SectionHeading, PageHero, CtaBanner, TrainerGrid, ReviewGrid
│   │   └── home/         # Home-page sections (Hero, Courses preview, FAQ, etc.)
│   ├── data/             # Content extracted into typed data modules
│   ├── hooks/            # Custom hooks (useScrollPosition)
│   ├── pages/            # One component per route
│   ├── App.jsx           # Route table
│   ├── main.jsx          # App entry point
│   └── index.css         # Tailwind import, design tokens and keyframes
├── index.html
└── vite.config.js
```

## Design system

Brand colours, fonts and animations are defined once as Tailwind theme tokens in
`src/index.css` (under `@theme`) and consumed through utility classes such as
`bg-primary`, `text-ink` and `font-display`. This keeps styling consistent across
every page and makes rebranding a single-file change.

## Responsiveness

Every section is fluid across mobile, tablet and desktop:

- The header collapses into a hamburger menu below the `lg` breakpoint.
- Card grids reflow from 1 → 2 → 3 → 4 columns as space allows.
- Headings use `clamp()` for fluid type scaling.
- The comparison table scrolls horizontally on small screens.
- `prefers-reduced-motion` is respected for all animations.

## Content editing

Text, courses, trainers, FAQs, testimonials and blog posts all live in
`src/data/`. Update those files to change site content without touching markup.
Image placeholders are rendered by the `ImageSlot` component — pass a `src` prop
to swap a placeholder for a real image.
