import { test, expect } from '@playwright/test';

test.describe('Projects Section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display project cards', async ({ page }) => {
        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeVisible();

        // Verify we have project cards (using the article tag which we know we used)
        const cards = projectsSection.locator('article');
        await expect(cards).toHaveCount(3); // We know we have 3 mock projects
    });

    test('should have correctly rendered mock content', async ({ page }) => {
        // Check for the mock titles we added
        await expect(page.getByText('Proyecto de Prueba Alpha')).toBeVisible();
        await expect(page.getByText('Proyecto de Prueba Beta')).toBeVisible();
    });
});
