# fracturesystems

Site for **Fracture Systems Consulting LLC** — architecture and implementation
for financial-services firms.

Audiences: banks, wealth managers, fund administrators, insurance, accounting
and advisory firms, and private equity platforms and family offices rolling
up services firms.

## What this is

A static site, two pages, no build step and no dependencies.

- `index.html` — the firm. Five service lines (architecture assessment,
  platform implementation, M&A and roll-up integration, intelligent
  automation, retainer) and the engagement sequence: conversation, assessment,
  implementation, support. About and contact are on this page.
- `roll-up.html` — the M&A and roll-up offer: systems and data diligence,
  operating visibility, fold-in, and the monthly pack, with the existing
  scope and pricing.

Contact: [matthew@fracturesystems.com](mailto:matthew@fracturesystems.com).

## Repo layout

```
index.html                    firm homepage
roll-up.html                  M&A and roll-up offer
styles.css                    layout, shared by both pages
print.css                     print stylesheet (light paper, both pages)
brand/tokens.css              color and type tokens, including dark mode
brand/favicon.svg             favicon
brand/mark.svg                header mark
brand/mark-reversed.svg       mark for a light field
brand/README.md               palette, type, and where the files came from
.github/workflows/static.yml  deploys the repo root to GitHub Pages on push to main
```

`brand/` holds the mark and the tokens taken from the site that already
shipped here. `matthew-fsc/fracture-systems-site` and
`matthew-fsc/fracture-systems-branding` were not available to clone
(repository not found), so no files were imported from them. See
`brand/README.md`.

## Working on it

No toolchain. Serve the directory and open the two pages:

```
python3 -m http.server 8000
```

Relative links also work if you open `index.html` from disk. Colors are CSS
custom properties. Dark mode follows `prefers-color-scheme`. Print forces a
light page, including the offer page, so it still prints as a clean document.

Layout breakpoints are 940px and 560px.

## Deploying

Push to `main`. The Pages workflow uploads the repo root and deploys it.
The workflow is unchanged: static files only, no build.
