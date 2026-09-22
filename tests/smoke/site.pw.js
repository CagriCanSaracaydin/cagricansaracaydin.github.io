import { expect, test } from '@playwright/test';

test('built portfolio renders and serves its key assets', async ({ page, request }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Cagri Can Saracaydin', level: 1 })).toBeVisible();

  const hero = page.getByRole('img', { name: 'Cagri Can Saracaydin' });
  await expect(hero).toBeVisible();
  await expect.poll(() => hero.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);

  const projects = page.getByRole('heading', { name: /github projects/i });
  await expect(projects).toBeVisible();
  await projects.scrollIntoViewIfNeeded();

  const projectImage = page.getByRole('img', { name: 'Search Engine C++ Project (CS300)' });
  await expect(projectImage).toBeVisible();
  await expect.poll(() => projectImage.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true);

  const resume = page.getByRole('link', { name: /view resume/i });
  const resumePath = await resume.getAttribute('href');
  expect(resumePath).toMatch(/^\/assets\/[^/]+\.pdf$/);
  const resumeResponse = await request.get(resumePath);
  expect(resumeResponse.ok()).toBe(true);
  expect(resumeResponse.headers()['content-type']).toContain('application/pdf');

  await expect(page.getByRole('link', { name: 'GitHub Profile' })).toHaveAttribute('href', /^https:\/\/github\.com\//);
  expect(pageErrors).toEqual([]);
});
