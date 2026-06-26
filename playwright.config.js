import { defineConfig, devices } from "@playwright/test";
import { existsSync } from "node:fs";

const localChromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const launchOptions = existsSync(localChromePath) ? { executablePath: localChromePath } : {};

export default defineConfig({
  testDir: "./tests",
  timeout: 45_000,
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry"
  },
  webServer: {
    command: "npx serve dist -p 4173",
    port: 4173,
    reuseExistingServer: true
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions
      }
    }
  ]
});
