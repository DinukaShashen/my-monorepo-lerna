import { test, expect } from "@playwright/test";

test("input + toast works", async ({ page }) => {
  await page.goto("/");

  const input = page.locator("input");
  const button = page.locator("button");

  await input.fill("Hello");
  await button.click();

  const toast = page.locator(".react-hot-toast");
  await expect(toast).toContainText("Hello");
});
