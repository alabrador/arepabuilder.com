import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/ui",
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  use: {
    baseURL: "http://localhost:3200",
    launchOptions: { args: ["--use-angle=swiftshader", "--enable-webgl"] },
    trace: "retain-on-failure",
  },
  webServer: {
    command: "npm run dev -- --port 3200",
    url: "http://localhost:3200",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
