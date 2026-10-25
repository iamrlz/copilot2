# Student portfolio

A responsive, dependency-free portfolio built with HTML, CSS, and JavaScript. Includes Home, About Me, Skills, Projects, and Contact sections, a mobile navigation menu, project filters, and expandable project descriptions.

## Preview locally

Open `index.html` directly in your browser. No installation or build step is required.

Alternatively, if Python 3 is available, run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository directory, then visit <http://127.0.0.1:8000>. Press Ctrl+C to stop the preview server.

## Make it yours

- Edit the student introduction, skills, and sample project descriptions in `index.html`.
- The projects are illustrative concepts, not published applications. Replace them with your own work and real links when available.
- The Contact section intentionally has no form or active contact destination. Replace its clearly labeled placeholder with a public contact link only if you choose to publish one.
- Adjust theme colors in the `:root` variables in `styles.css`. Interactions live in `script.js`.

## Accessibility and privacy

The page supports keyboard navigation, visible focus indicators, a skip link, reduced-motion preferences, and screen-reader announcements for project filters. Content and project details remain available without JavaScript.

There is no backend, analytics, cookies, external font, third-party dependency, location request, or personal-information collection. All visuals are made with CSS.

## Checks

There is no package manager, build pipeline, or automated test suite. Preview at desktop and mobile widths; check the navigation menu, Escape-to-close behavior, section links, project filters, expandable details, and keyboard focus. Disable JavaScript to check the fallback layout.