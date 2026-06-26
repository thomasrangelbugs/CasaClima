import { test, expect } from "@playwright/test";

test.describe("CasaClima fluxos críticos", () => {
  test("home carrega clima e navegação", async ({ page }) => {
    await page.goto("/index.html");
    await expect(page.locator(".brand strong")).toHaveText("CasaClima");
    await expect(page.locator("#weatherSearchForm")).toBeVisible();
    await expect(page.locator("#heroTemperature")).toBeVisible();
    await expect(page.locator("body")).toHaveClass(/has-weather-fade/);
  });

  test("cofre exige desbloqueio", async ({ page }) => {
    await page.goto("/cofre.html");
    await expect(page.locator("#vaultGate")).toBeVisible();
    await expect(page.locator("#vaultWorkspace")).toBeHidden();
  });

  test("gastos abre dashboard com gráfico", async ({ page }) => {
    await page.goto("/gastos.html");
    await page.locator('[data-budget-tab-button="dashboard"]').click();
    await expect(page.locator("#budgetChart")).toBeVisible();
  });

  test("utilidades exibe mapa de rota", async ({ page }) => {
    await page.goto("/utilidades.html");
    await expect(page.locator("#routeMap")).toBeVisible();
    await expect(page.locator("#routeForm")).toBeVisible();
  });
});
