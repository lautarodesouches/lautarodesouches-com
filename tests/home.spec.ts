import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should have correct metadata', async ({ page }) => {
        await expect(page).toHaveTitle(/Lautaro Desouches/);

        // Check if hero content is visible
        await expect(page.getByText('Ingeniería Front-End Escalable')).toBeVisible();
    });

    test('should navigate to sections', async ({ page }) => {
        // Check main sections exist
        await expect(page.locator('#about')).toBeVisible();
        await expect(page.locator('#projects')).toBeVisible();
        await expect(page.locator('#skills')).toBeVisible();
        await expect(page.locator('#contact')).toBeVisible();
    });
});
