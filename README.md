# TeamShastra Marketing Website

This workspace contains the Next.js public marketing website for `https://teamshastra.com/`.

## Development

```bash
npm install
npm run dev
```

The site uses the Next.js App Router. Marketing routes live in `app/`, shared UI lives in `components/`, SEO/domain constants live in `lib/site.ts`, and brand assets are served from `public/brand/`.

## Multi-domain architecture

- `https://teamshastra.com/` is the public marketing website. It is indexable, keyword-focused, and built to generate leads.
- `https://app.teamshastra.com/` is the authenticated TeamShastra application. It handles login, signup, company creation, and product usage.
- Login links route to `https://app.teamshastra.com/login`.
- Signup and CTA links route to `https://app.teamshastra.com/signup`.

## SEO strategy for teamshastra.com

- Public pages include titles, descriptions, canonical URLs, Open Graph tags, Twitter Cards, and indexable robots metadata through Next metadata exports.
- `app/sitemap.ts` generates `https://teamshastra.com/sitemap.xml` for the home page, marketing pages, blog, contact, privacy policy, and terms.
- `app/robots.ts` generates `https://teamshastra.com/robots.txt`, allows crawling for the marketing website, and points crawlers to the sitemap.
- The home page includes Organization JSON-LD for TeamShastra with category `Field Service Management Software`.

## Robots strategy for app.teamshastra.com

`robots.txt` is host-specific. The marketing site's `robots.txt` cannot disallow the app subdomain.

Deploy `public/app-robots.txt` as:

```text
https://app.teamshastra.com/robots.txt
```

Recommended app response headers for authenticated pages:

```text
X-Robots-Tag: noindex, nofollow
```

## Google Search Console readiness

- Add the production Search Console token by replacing `replace-with-google-search-console-token` in the page metadata.
- Submit `https://teamshastra.com/sitemap.xml` in Search Console.
- Verify the `https://teamshastra.com/` property using DNS, HTML file, or the included meta tag approach.
- Keep `https://app.teamshastra.com/` out of SEO targeting and avoid submitting an app sitemap.

## Canonical URL strategy

- Every public page uses a canonical URL on `https://teamshastra.com/`.
- Application routes are never used as canonicals for public marketing pages.
- Conversion links intentionally cross domains from marketing pages to the app signup/login routes.

## Conversion goal

Visitor reads the marketing website, clicks Join Beta, lands on `https://app.teamshastra.com/signup`, creates a test company, and evaluates TeamShastra before the planned production release.