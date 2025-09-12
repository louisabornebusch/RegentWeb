import { test, expect } from '@playwright/test';

test.describe('Assignments Page', () => {
  test('should display assignments with filters', async ({ page }) => {
    await page.goto('/sv/uppdrag');
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Aktuella uppdrag');
    
    // Check if assignments are displayed
    await expect(page.locator('[data-testid="job-card"]')).toHaveCount(6);
    
    // Test search functionality
    await page.fill('input[placeholder*="Sök"]', 'Backend');
    await expect(page.locator('[data-testid="job-card"]')).toHaveCount(1);
    
    // Test location filter
    await page.selectOption('select', 'Stockholm');
    await expect(page.locator('[data-testid="job-card"]')).toHaveCount(1);
    
    // Test technology filter
    await page.selectOption('select', 'Java');
    await expect(page.locator('[data-testid="job-card"]')).toHaveCount(1);
    
    // Test workload filter
    await page.selectOption('select', '100%');
    await expect(page.locator('[data-testid="job-card"]')).toHaveCount(1);
  });

  test('should show no results when filters match nothing', async ({ page }) => {
    await page.goto('/sv/uppdrag');
    
    // Search for something that doesn't exist
    await page.fill('input[placeholder*="Sök"]', 'Nonexistent');
    
    // Should show no results message
    await expect(page.locator('text=Inga uppdrag hittades')).toBeVisible();
  });

  test('should clear filters', async ({ page }) => {
    await page.goto('/sv/uppdrag');
    
    // Apply some filters
    await page.fill('input[placeholder*="Sök"]', 'Backend');
    await page.selectOption('select', 'Stockholm');
    
    // Clear filters
    await page.click('button:has-text("Rensa filter")');
    
    // Should show all assignments again
    await expect(page.locator('[data-testid="job-card"]')).toHaveCount(6);
  });
});
