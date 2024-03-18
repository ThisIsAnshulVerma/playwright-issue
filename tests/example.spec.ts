import { test } from "@playwright/test";

test.describe.parallel("Login Tests for all clients", () => {
    test("Go to google.com, search Rocky IV movie, click on first link", async ({ page }) => {

        await page.goto("https://www.google.com");

        await page.locator('textarea[name="q"]').fill("Rocky IV");

        await page.click('input[name="btnK"]');

        await page.click('h3');
        // await page.waitForTimeout(5000);
    });
});