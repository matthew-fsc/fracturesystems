# fracturesystems

Site for **Fracture Systems Consulting LLC** — systems architecture and
implementation for financial-services firms in transition.

## What this is

A static site, no build step and no dependencies.

- `index.html` — the capability statement: headline, lead, six core
  competencies, transitions, why Fracture, selected experience, how we
  engage, and the prospect intake form.
- `roll-up.html` — the M&A and roll-up operating model for acquirers
  (systems and data diligence, operating visibility, fold-in, monthly
  pack). Linked from the M&A competency card as "For acquirers: the
  roll-up operating model".
- `capability-statement.pdf` — printable one-page capability statement.

Contact: [matthew@fracturesystems.com](mailto:matthew@fracturesystems.com).
Book a conversation:
[Macro discovery](https://macro.com/app/book/eca4bc76-f4c4-539f-b771-cd7d7cb89034/fracture-discovery).

## Repo layout

```
index.html                    capability statement + intake
roll-up.html                  roll-up operating model for acquirers
capability-statement.pdf      one-page capability statement download
styles.css                    layout, shared by both pages
print.css                     one-page capability print for the homepage
intake.js                     prospect form. POST JSON, or mailto when unset
brand/                        mark, favicon, color and type tokens
.github/workflows/static.yml  deploys the repo root to GitHub Pages on push to main
```

## Working on it

No toolchain. Serve the directory:

```
python3 -m http.server 8000
```

Colors are CSS custom properties. Dark mode follows `prefers-color-scheme`.
Print forces a light one-page capability statement from the homepage
(intake and navigation omitted). Layout breakpoints are 940px and 560px.

The intake form posts JSON to `INTAKE_URL` in `intake.js`. Leave the
constant empty and the form opens a mailto. A hidden website field is a
honeypot. No third-party form service.

## Deploying

Push to `main`. The Pages workflow uploads the repo root and deploys it.
Static files only, no build.
