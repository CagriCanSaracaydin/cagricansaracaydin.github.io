# Personal Portfolio

React portfolio for Cagri Can Saracaydin, published at [cagricansaracaydin.github.io](https://cagricansaracaydin.github.io).

## Local Development

Node.js 18 or 20 LTS is recommended.

```bash
npm install
npm start
```

The development server runs at `http://localhost:3000` with hot reload.

## Validation

```bash
npm test           # Interactive Jest watch mode
npm run test:ci    # Run the test suite once
npm run build      # Create an optimized production bundle
npm run serve      # Serve build/ at http://localhost:5000
```

## Content and Assets

Portfolio content is stored directly in the components under `src/components/`. Update the matching metadata in `public/index.html` and `public/sitemap.xml` when experience or education changes.

Components serve committed assets from `public/images/optimized/` through `OptimizedImage`. To replace images:

1. Put PNG or JPEG source files in the ignored `public/images/media/` directory.
2. Keep the existing base filenames referenced by the components.
3. Run `node scripts/optimize-images.js`.
4. Review and commit the regenerated files in `public/images/optimized/`.

Downloadable resumes and certificates live in `src/files/` and are bundled with hashed filenames.

## Deployment

```bash
npm run deploy
```

The deploy command builds the application and publishes `build/` to the `gh-pages` branch. The Google Analytics measurement ID is configured in `public/index.html`; the optional `REACT_APP_ANALYTICS_ENDPOINT` build variable can receive Web Vitals and must not contain secrets.
