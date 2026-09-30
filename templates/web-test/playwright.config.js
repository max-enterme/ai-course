// テストの道具(Playwright Test)の設定。tests/ の中のテストを、Chromium(Chrome の元になっているブラウザ)で動かす
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  // 失敗したときの結果のページ(playwright-report/)は作るが、自動では開かない
  reporter: [['list'], ['html', { open: 'never' }]],
  retries: 0,
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
