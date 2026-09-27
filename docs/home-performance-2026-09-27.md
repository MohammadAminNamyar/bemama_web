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
