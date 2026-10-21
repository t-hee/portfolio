# Codex instructions — portfolio

Read `PORTFOLIO_SPEC.md` and `PROJECT_FACTS.md` before coding. Treat project facts as authoritative; ask before inventing dates, roles, metrics, libraries, links, or completion claims. Keep all displayed Korean copy natural and accurate.

## Stack and scope
- Static, deployable HTML5 + vanilla CSS + vanilla JavaScript. No framework, build system, package manager, or backend without explicit approval.
- Main one-page portfolio at `index.html`; project detail pages under `projects/`.
- Shared stylesheet `css/style.css`; shared interaction script `js/main.js`.
- Accessibility: semantic landmarks, alt text, visible focus, keyboard navigation, good contrast, `prefers-reduced-motion` support.
- Responsive layouts, especially readable mobile project cards. Avoid horizontal overflow.
- Use relative asset and page URLs that work both locally and on GitHub Pages at `/<repo>/`.
- Avoid fake buttons, placeholder URLs that appear functional, and fabricated project screenshots. Use neutral image placeholders until real assets are provided.
- Do not include date of birth, address, phone number, student ID, or private contact details. No secret keys or external tracking.

## Execution discipline
- Work only on the requested milestone. Make minimal, maintainable edits.
- For each milestone: briefly state changed files, how to preview/test, and any unresolved questions.
- Do not git push, publish, or overwrite provided assets unless asked.
- Favor concise English explanations in technical work; Korean is required for visible website text.
