// 見本のテスト。index.html をブラウザで直接開き(サーバーを使わない)、ページが出てエラーが起きないことを確かめる
// spec.md の条件のテストは、この形をまねて足していく。テストの名前は spec.md の条件の文をそのまま使う
const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

// プロジェクトの一番上にある HTML ファイルを開く
async function open(page, file = 'index.html') {
  await page.goto(pathToFileURL(path.join(__dirname, '..', file)).href);
}

test('index.html を開くと、ページが表示されてエラーが出ない', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await open(page);
  await expect(page.locator('body')).toBeVisible();
  expect(errors).toEqual([]);
});
