# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server (hot reload)
npm run build    # Production build to dist/
npm run lint     # ESLint (flat config, ESLint 9+)
npm run preview  # Preview production build locally
```

Requires Node.js >= 20.

## Architecture

React 18 + Vite 5 portfolio site. No router — navigation uses `useState` in `App.jsx` to toggle between the main page and an experience detail view. Scroll position is saved/restored via `sessionStorage`.

### State & Context

- **ThemeContext** (`src/assets/context/ThemeContext.jsx`): Light/dark toggle, persisted to `localStorage`, sets `data-theme` attribute on `<body>` for CSS variable switching.
- **LanguageContext** (`src/assets/context/LanguageContext.jsx`): French/English toggle, persisted to `localStorage`.
- Both contexts use `useCallback` for stable toggle functions and `useMemo` for the provider value.

### i18n System

Custom hook `useTranslation()` in `src/hooks/useTranslation.js` returns a memoized function `t(key)` that traverses `translations[language]` using dot-notation (e.g., `t('experiences.tasukeru.title')`). All text is in `src/assets/dictionnaire/translations.js` with `french` and `english` top-level keys. When adding text, always add both languages.

### Theme-Aware Icons

`useThemeIcons()` (`src/hooks/useThemeIcons.js`) returns icon paths that swap based on current theme (light/dark variants). Icons are SVGs in `src/assets/pictures/icons/`.

### CSS

- **CSS Modules** (`.module.css`) for all component styles — import as `styles` object.
- **Design tokens** defined as CSS custom properties in `App.css` `:root`: `--radius-sm/md/pill`, `--shadow-sm/md/lg`, `--transition-fast/base`.
- **Theme colors** switch via `[data-theme="dark"]` selector in `App.css`.
- **Shared `.btn` class** in `App.css` for buttons (used by Profile CV link and Contact submit).
- **`.visuallyHidden`** class in `App.css` for screen-reader-only content.
- Global `prefers-reduced-motion` in `App.css` disables all animations/transitions.
- Breakpoints: base (mobile), `800px` (tablet/desktop), `1400px` (large desktop).

## Adding a New Experience

1. **Translations** — Add entry in `src/assets/dictionnaire/translations.js` under both `french.experiences.<key>` and `english.experiences.<key>` with: `link`, `title`, `description`, `role`, `duration`, `showGallery`, `tags[]`, `highlights[]`, `details`.
2. **Logo** — Place SVG/PNG in `src/assets/pictures/logos/`.
3. **Thumbnails** (optional) — Place PNGs in `src/assets/pictures/thumbnail/`.
4. **Experiences.jsx** — Import logo (and thumbnails), add `exp('<key>', logo, labels.<cta>, { galleryImages: [...] })` to the `experiences` array. The factory function `exp()` pulls all data from translations automatically.

## Key Conventions

- All interactive non-link elements use semantic `<button>` with `aria-label`.
- Clickable `<div>`s (ExperienceCard) include `role="button"`, `tabIndex={0}`, and `onKeyDown` for keyboard access.
- Hooks use `useCallback`/`useMemo` for stable references (contexts, translation function, event handlers).
- `<footer>` tag for Footer component (not `<section>`).
- Labels use `className="visuallyHidden"` (not `hidden` attribute) for accessibility.
