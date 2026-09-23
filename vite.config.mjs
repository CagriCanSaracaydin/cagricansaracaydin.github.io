import { createHash } from 'node:crypto';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const inlineHash = (html, pattern) => {
  const match = html.match(pattern);
  if (!match) throw new Error('Missing inline content required by the CSP');
  return `'sha256-${createHash('sha256').update(match[1]).digest('base64')}'`;
};

const cspHashes = () => ({
  name: 'csp-inline-hashes',
  transformIndexHtml: {
    order: 'post',
    handler(html) {
      return html
        .replace('__CSP_JSON_LD_HASH__', inlineHash(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/))
        .replace('__CSP_CRITICAL_CSS_HASH__', inlineHash(html, /<style>([\s\S]*?)<\/style>/));
    },
  },
});

export default defineConfig({
  plugins: [react(), cspHashes()],
  base: '/',
  build: {
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
    globals: true,
  },
});
