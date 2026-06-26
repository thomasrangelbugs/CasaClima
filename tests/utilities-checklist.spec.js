import { test, expect } from "@playwright/test";

test.describe("Utilidades checklist e contatos", () => {
  test("adiciona tarefa no checklist", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));

    await page.goto("/utilidades.html");
    await expect(page.locator("html")).toHaveClass(/js-ready/);
    await expect(page.locator(".task-item").first()).toBeVisible();

    const beforeCount = await page.locator(".task-item").count();
    await page.fill("#taskInput", "Tarefa de teste automatizado");
    await page.locator("#taskForm button[type=submit]").click();
    await expect(page.locator(".task-item")).toHaveCount(beforeCount + 1);
    await expect(page.locator(".task-item").first()).toContainText("Tarefa de teste automatizado");
    expect(errors).toEqual([]);
  });

  test("adiciona contato", async ({ page }) => {
    await page.goto("/utilidades.html");
    await expect(page.locator("html")).toHaveClass(/js-ready/);
    await expect(page.locator(".contact-row").first()).toBeVisible();

    const beforeCount = await page.locator(".contact-row").count();
    await page.click("#addContactButton");
    await expect(page.locator(".contact-row")).toHaveCount(beforeCount + 1);
  });

  test("home adiciona tarefa pela automação", async ({ page }) => {
    await page.goto("/index.html");
    await expect(page.locator("html")).toHaveClass(/js-ready/);

    const addButton = page.locator("#homeAutomationList [data-home-action='add-task']").first();
    await expect(addButton).toBeVisible();
    await addButton.click();
    await expect(page.locator(".toast-stack .toast.is-success")).toContainText(/checklist/i);
  });

  test("home briefing cria tarefa", async ({ page }) => {
    await page.goto("/index.html");
    await expect(page.locator("html")).toHaveClass(/js-ready/);

    const createButton = page.locator("#homeBriefingList [data-home-action='add-task']");
    if ((await createButton.count()) === 0) {
      test.skip();
    }

    await createButton.first().click();
    await expect(page.locator(".toast-stack .toast.is-success")).toContainText(/checklist/i);
  });
});
