import { test, expect } from '@playwright/test';

test.describe('Projects Section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display project cards', async ({ page }) => {
        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeVisible();

        // Verify we have project cards
        const cards = projectsSection.locator('article');
        await expect(cards).toHaveCount(5);
    });

    test('should have correctly rendered mock content', async ({ page }) => {
        // Check for project titles
        await expect(page.getByText('Gusto - Social Restaurant Discovery')).toBeVisible();
        await expect(page.getByText('Desouches Propiedades - Sitio Web Inmobiliario')).toBeVisible();
    });
});
