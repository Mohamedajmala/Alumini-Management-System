# AlumniManage+
A clean, modern alumni portal with neon accents, pop-up modal, tabbed highlights, gallery lightbox, and events that open in **new tabs**.

## Pages
- `index.html` — Home with hero, stats, tabs (News/Events/Jobs), and modal trigger.
- `about.html` — About section.
- `events.html` — Searchable/filterable events. Each event opens details in a new tab.
- `gallery.html` — Responsive grid with lightbox modal. Uses local SVG placeholders.
- `contact.html` — Contact form (demo).

## Events (detail pages open in new tabs)
- `events/event-1.html`
- `events/event-2.html`
- `events/event-3.html`

## Features
- **Popup modal** (Join Alumni) + ESC to close, backdrop click.
- **Neon professional theme** using CSS variables.
- **Accessible tabs** with keyboard support.
- **IntersectionObserver** reveal animations (respect `prefers-reduced-motion`).
- **Responsive** mobile nav with slide-in panel.
- **Events** page search and filter.

## Customize Colors
Edit CSS variables in `css/style.css` under `:root`. For a different accent, change `--accent` and `--accent-2`.

## Deploy
This is 100% static. Drag-and-drop the folder to Netlify, Vercel, or GitHub Pages.
