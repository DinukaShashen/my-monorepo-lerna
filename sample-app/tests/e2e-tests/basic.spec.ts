import { test, expect } from "@playwright/test";

test("input + toast works", async ({ page }) => {
  await page.goto("/");

  const input = page.locator("input");
  const button = page.getByRole("button", { name: "Show Toast" });

  await input.fill("Hello");
  await button.click();

  await expect(page.getByText("You typed: Hello")).toBeVisible();
});
