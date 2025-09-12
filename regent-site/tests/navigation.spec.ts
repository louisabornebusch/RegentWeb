import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/sv');
    
    // Check if we're on the home page
    await expect(page).toHaveTitle(/Regent/);
    
    // Test navigation to different pages
    const navLinks = [
      { text: 'Hem', href: '/sv' },
      { text: 'Uppdrag', href: '/sv/uppdrag' },
      { text: 'Om oss', href: '/sv/om-oss' },
      { text: 'Kontakt', href: '/sv/kontakt' },
      { text: 'Aktuellt', href: '/sv/aktuellt' },
      { text: 'Jobb', href: '/sv/jobb' },
    ];

    for (const link of navLinks) {
      await page.click(`text=${link.text}`);
      await expect(page).toHaveURL(new RegExp(link.href));
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('should switch language from Swedish to English', async ({ page }) => {
    await page.goto('/sv');
    
    // Click language toggle
    await page.click('button:has-text("EN")');
    
    // Should redirect to English version
    await expect(page).toHaveURL('/en');
    await expect(page.locator('text=Home')).toBeVisible();
  });

  test('should switch language from English to Swedish', async ({ page }) => {
    await page.goto('/en');
    
    // Click language toggle
    await page.click('button:has-text("SV")');
    
    // Should redirect to Swedish version
    await expect(page).toHaveURL('/sv');
    await expect(page.locator('text=Hem')).toBeVisible();
  });

  test('should handle 404 page', async ({ page }) => {
    await page.goto('/sv/nonexistent-page');
    
    // Should show 404 page
    await expect(page.locator('text=404')).toBeVisible();
    await expect(page.locator('text=Sidan hittades inte')).toBeVisible();
    
    // Should have back to home link
    await expect(page.locator('text=Tillbaka till startsidan')).toBeVisible();
  });
});
