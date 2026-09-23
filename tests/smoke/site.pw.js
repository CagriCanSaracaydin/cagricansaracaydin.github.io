import { expect, test } from '@playwright/test';

test('built portfolio renders and serves its key assets', async ({ page, request }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Cagri Can Saracaydin', level: 1 })).toBeVisible();

  const hero = page.getByRole('img', { name: 'Cagri Can Saracaydin' });
  await expect(hero).toBeVisible();
  await expect.poll(() => hero.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);

  const projects = page.getByRole('heading', { name: 'Projects', level: 2 });
  await expect(projects).toBeVisible();
  await projects.scrollIntoViewIfNeeded();

  const projectImage = page.getByRole('img', { name: 'Search Engine C++ Project (CS300)' });
  await expect(projectImage).toBeVisible();
  await expect.poll(() => projectImage.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);

  await expect(page.getByRole('link', { name: /view resume/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'cagrisaracaydin@gmail.com' }))
    .toHaveAttribute('href', 'mailto:cagrisaracaydin@gmail.com');

  await expect(page.getByRole('heading', { name: 'Certificates', level: 2 })).toBeVisible();
  for (const [title, badgeId] of [
    ['AWS Certified AI Practitioner', '421388ca-e006-4782-9867-7c747838d777'],
    ['AWS Certified Cloud Practitioner', '92e20b3d-6823-478b-beab-c580ccc78dbf'],
  ]) {
    const certificate = page.getByRole('link', { name: `View ${title} certificate` });
    await expect(certificate).toHaveAttribute('href', `https://www.credly.com/badges/${badgeId}/public_url`);
    const badge = page.getByRole('img', { name: `${title} badge` });
    await expect.poll(() => badge.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);
  }
  for (const title of ['McKinsey Forward Program', 'Harvard CS50', 'Certificate of Achievement']) {
    const certificate = page.getByRole('link', { name: `View ${title} certificate` });
    const certificatePath = await certificate.getAttribute('href');
    expect(certificatePath).toMatch(/^\/assets\/[^/]+\.pdf$/);
    expect((await request.get(certificatePath)).ok()).toBe(true);
  }

  await expect(page.getByRole('link', { name: 'GitHub Profile' })).toHaveAttribute('href', /^https:\/\/github\.com\//);
  expect(pageErrors).toEqual([]);
});

test('mobile loads one right-sized hero image', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const heroRequests = [];
  page.on('request', (request) => {
    const path = new URL(request.url()).pathname;
    if (path.startsWith('/images/optimized/hero')) heroRequests.push(path);
  });

  await page.goto('/');
  const hero = page.getByRole('img', { name: 'Cagri Can Saracaydin' });
  await expect.poll(() => hero.evaluate((image) => new URL(image.currentSrc).pathname))
    .toBe('/images/optimized/hero-small.webp');
  expect(heroRequests).toEqual(['/images/optimized/hero-small.webp']);
});

test('mobile project cards load a smaller image', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const projectImage = page.getByRole('img', { name: 'Search Engine C++ Project (CS300)' });
  await projectImage.scrollIntoViewIfNeeded();
  await expect.poll(() => projectImage.evaluate((image) => image.currentSrc ? new URL(image.currentSrc).pathname : null))
    .toBe('/images/optimized/project1-small.webp');
});

test('analytics script starts after the page load event', async ({ page }) => {
  await page.route('https://www.googletagmanager.com/gtag/js?*', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/javascript',
      body: 'window.__analyticsScriptLoaded = true;',
    })
  );

  await page.goto('/');
  await expect.poll(() => page.evaluate(() => window.__analyticsScriptLoaded === true)).toBe(true);

  const timing = await page.evaluate(() => ({
    loadEventStart: performance.getEntriesByType('navigation')[0].loadEventStart,
    scriptStart: performance.getEntriesByType('resource')
      .find((entry) => entry.name.includes('/gtag/js?'))?.startTime,
  }));
  expect(timing.scriptStart).toBeGreaterThanOrEqual(timing.loadEventStart);
});

test('content policy permits the site and blocks injected inline code', async ({ page }) => {
  await page.route('https://www.googletagmanager.com/gtag/js?*', (route) =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' })
  );
  await page.addInitScript(() => {
    window.__cspViolations = [];
    document.addEventListener('securitypolicyviolation', (event) => {
      window.__cspViolations.push(`${event.effectiveDirective}: ${event.blockedURI}`);
    });
  });

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Cagri Can Saracaydin', level: 1 })).toBeVisible();
  expect(await page.evaluate(() => window.__cspViolations)).toEqual([]);

  const injectedCodeRan = await page.evaluate(() => {
    const script = document.createElement('script');
    script.textContent = 'window.__inlineProbe = true';
    document.head.append(script);
    return window.__inlineProbe === true;
  });
  expect(injectedCodeRan).toBe(false);

  const injectedStyleApplied = await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = 'html { --csp-probe: visible; }';
    document.head.append(style);
    return getComputedStyle(document.documentElement).getPropertyValue('--csp-probe').trim() === 'visible';
  });
  expect(injectedStyleApplied).toBe(false);
});
