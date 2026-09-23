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
