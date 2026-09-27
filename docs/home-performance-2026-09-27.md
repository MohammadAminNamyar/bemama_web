# Homepage loading optimization

The mobile Lighthouse screenshot reported 93, with FCP 2.3 s, LCP 2.9 s,
zero blocking time and zero layout shift. It identified render-blocking requests
and image delivery opportunities. No new production Lighthouse score is claimed.

## Changes

- Convert Manrope's variable TTF to WOFF2 without changing its glyphs, weights,
  metrics or license. Preload the same versioned font URL used by CSS on Latin
  pages; keep the existing RTL font selection.
- Inline the homepage's complete layout/navigation stylesheet in the document.
  Exclude tool/organizer and routine-article rules, keeping shared overrides in
  their original cascade order. Other routes retain the external shared CSS.
  There is no deferred stylesheet swap or dependency on JavaScript for styling.
- Add AVIF and responsive WebP guide images. The three portrait illustrations
  fit a 144 by 180 CSS-pixel area inside their cards; 160/320/480-pixel variants
  cover normal and high-density displays. Preserve original image URLs.
- Add AVIF character artwork and intermediate responsive sizes while retaining
  the original branded illustration and WebP fallback.
- Teach the local server the WOFF2/TTF MIME types. Update validation to check
  inline first-paint styling and to exclude CSS and asset fingerprints from
  editorial-claim checks.

## Measured file sizes

| Resource | Before | After |
| --- | ---: | ---: |
| Manrope font | 164,700 B | 53,796 B |
| Homepage CSS, uncompressed | 106,129 B | 69,753 B |
| Homepage blocking CSS requests | 1 | 0 |
| HTML + CSS, gzip combined | 31,595 B | 25,784 B |
| Three guide images, at 3x display density | 221,176 B | 56,111 B |

The image comparison uses the old full-size WebP files and new 480-pixel AVIF
files. Actual selections depend on browser support, viewport and display density.
Inline CSS makes the HTML larger but reduces combined compressed HTML/CSS bytes
and removes the stylesheet round trip. These byte measurements are not a
substitute for another production PageSpeed run after deployment.

## Verification

- 134 tests pass; 1,442 HTML files and 1,435 localized routes validated.
- SEO audit passes with no duplicate titles/descriptions or localization issues.
- English mobile layout geometry matches the pre-change measurements for header,
  hero, title, stage cards, product previews, guide section and footer.
- Desktop, mobile menu, mobile guide images and Persian RTL layout checked in
  the browser. Persian has no horizontal overflow or unused Manrope preload.

WOFF2 was generated with FontTools (`TTFont`, `flavor = 'woff2'`). AVIFs were
generated from original JPG/PNG sources with Sharp at quality 55, effort 5;
responsive WebP variants use quality 82. All generated assets are committed, so
the normal site build requires neither image nor font conversion dependencies.

## Follow-up to the 95-point production report

Chrome report: https://pagespeed.web.dev/analysis/https-bemamas-com/30g8ed2pg0?hl=en&form_factor=mobile

The deployed first pass measured FCP 1.7 s, LCP 2.3 s, TBT 0 ms, CLS 0 and
Speed Index 4.2 s. Its hero had 1.8 s of element render delay. Cache purging had
already been performed; the live page contained the new inline CSS/font URLs.

The follow-up fixes an omitted 400-pixel responsive candidate: the 224 CSS-pixel
hero at Lighthouse's 1.75x density previously jumped from 320 to 640 pixels.
Both preload and picture now include 400 and 480 pixels. The observed Chrome
selection is 400 pixels (25,689 B) instead of 640 (45,741 B). Product previews
also gain 480/560-pixel candidates and low fetch priority, while stage characters
use accurate 90/100-pixel sizing, AVIF and a new 200-pixel intermediate variant.

The homepage CSS is further reduced from about 70 KB to 40 KB by retaining
only the shared header/footer, homepage, article-card, breakpoint and motion
sections in their original cascade order. A 470-element mobile comparison found
no computed-style or dimension differences (scroll position was excluded).

Manrope now prefers a 36,772-byte Latin-and-symbol subset; the complete font
remains available for other scripts. Common arrow/math symbols are included to
avoid fetching both font files. All original variable weights are preserved.
The page uses a single 48-pixel PNG favicon declaration; install/touch icons are
unchanged, and the legacy ICO retains 16/32/48-pixel frames at 5,943 bytes instead
of 50,952 bytes. This avoids requesting redundant large tab-icon formats.

The legacy-JavaScript audit identifies Cloudflare's injected analytics beacon,
not the site's source scripts. No analytics service was removed or disabled.
Another production run is needed after deploying this follow-up; local resource
selection and byte reductions do not establish a new Lighthouse score.

## Rendering containment after the 96-point report

The homepage now uses `content-visibility: auto` on its six sections after the
hero. Desktop/mobile intrinsic block-size estimates reserve scroll space;
`auto` remembers each section's actual height after it renders. A 24-pixel
overflow clip margin preserves card shadows, and print media explicitly renders
all sections. The hero, typography and article/tool pages keep their existing
rendering behavior. Content remains in the generated HTML.

Six local Chrome traces (three control, three optimized) used a 412 × 823
viewport, 1.75 device scale, disabled browser cache, 150 ms latency,
200,000 bytes/s download and 4× CPU slowdown. The control runs used the same
homepage with containment disabled. Timing varied, so these are local medians,
not a new production PageSpeed score:

| Measurement | Control median | Optimized median |
| --- | ---: | ---: |
| Total layout time during recorded load | 686 ms | 607 ms |
| Large layout pass following font completion | 466 ms | 341 ms |
| Objects marked dirty in that font-related pass (all runs) | 466 | 303 |
| Initial full layout object count (all runs) | 521 | 254 |

Total layout elapsed times ranged from 667–849 ms in the controls and 427–858 ms
in the optimized runs. The reduction in initial object counts was consistent;
individual timing improvements were not. Offscreen work is deferred until needed,
not eliminated. No claim is made that containment resolves the full render delay
seen in the remote PageSpeed report.

Validation: all 134 tests passed; 1,442 generated HTML files and 1,435 localized
routes validated. The seven rendered homepage section heights matched the
control exactly at 412 px. Desktop, English/Persian mobile scrolling, a deferred
link, keyboard navigation into a deferred guide and print visibility were checked.
The English/Persian mobile pages had no horizontal overflow. Font metrics were
left unchanged; the site's existing CLS was zero, and this experiment isolates
the offscreen-layout change.
