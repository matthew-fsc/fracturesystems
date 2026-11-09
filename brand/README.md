# Brand

Mark, favicon, and color tokens for Fracture Systems Consulting LLC.
The site links `tokens.css` and `favicon.svg`. There is no build step and
no webfont file: type is a system stack, declared as `--font-text` and
`--font-display` in `tokens.css`.

## Source

These files are the identity already shipping in this repository (the mark
was previously inlined as the favicon). Two repos named as further brand
sources could not be cloned:

- `matthew-fsc/fracture-systems-site` — repository not found
- `matthew-fsc/fracture-systems-branding` — repository not found

Nothing from any other repository was copied into this folder.

## Mark

`mark.svg` and `favicon.svg` are the same drawing: a tile `#12161c` and an
F in `#f4f1ea`. `mark-reversed.svg` swaps those two fills for use on a light
field. The header uses `mark.svg` with a hairline border so the tile stays
visible on both the light page and the dark page.

## Color

| Token | Light | Dark |
| --- | --- | --- |
| paper | `#f6f4ef` | `#12151a` |
| paper-raised | `#fffdf9` | `#191d24` |
| ink | `#14181e` | `#ecebe6` |
| ink-soft | `#414a56` | `#b3bac4` |
| ink-faint | `#6d7784` | `#8b939e` |
| rule | `#d8d3c8` | `#2c323b` |
| rule-soft | `#e6e2d9` | `#232830` |
| accent | `#8c4a2f` | `#d08f5f` |
| accent-soft | `#b8865f` | `#a87a52` |
| band | `#12161c` | `#0b0e12` |
| band-ink | `#edeae3` | `#ecebe6` |
| band-faint | `#9aa3ae` | `#8b939e` |

Dark values apply under `prefers-color-scheme: dark`. Print forces the light
set, in `print.css` at the repo root.

## Type

- Text: `-apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, "Helvetica Neue", Arial, sans-serif`
- Display: `"Iowan Old Style", "Palatino Linotype", Palatino, "Source Serif Pro", Georgia, serif`
