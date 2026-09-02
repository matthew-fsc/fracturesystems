# fracturesystems

Site for **Fracture Systems Consulting LLC** — operating data and reporting for
acquirers of services firms.

## What this is

A single-page static site stating the offer: one operating model across every
acquisition, from the platform close through each add-on.

- Systems and data diligence, run inside the diligence window, credited against
  fold-in at close.
- Operating visibility at the platform close, read-only from day one.
- Fold-in per add-on, then an ongoing monthly pack for board, lender and next
  buyer.

Target buyer: private equity platforms, family offices, private wealth groups
and other aggregators doing two or more add-ons a year in relationship-driven
services, $10M to $150M enterprise value.

## Repo layout

```
index.html                    the site (self-contained, no build step, no dependencies)
.github/workflows/static.yml  deploys the repo root to GitHub Pages on push to main
```

## Working on it

No toolchain. Open `index.html` in a browser, or serve the directory:

```
python3 -m http.server 8000
```

Copy lives inline in `index.html`. Layout is CSS grid with breakpoints at 940px
and 560px; colors are CSS custom properties on `:root` with a
`prefers-color-scheme: dark` override. There is also a print stylesheet so the
page prints as a clean one-pager.

## Deploying

Push to `main`. The Pages workflow uploads the repo root and deploys it.
