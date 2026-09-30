# テストの雛形(Web の題材)

Web の題材で、**テスト**(本物のブラウザを自動で動かして、spec.md の条件どおりかを確かめるしくみ)を始めるための最小限のファイルです。
テストを入れる周(手で確かめる条件が増えて大変になったとき。遅くとも Lv3 に上げるとき)に、作る役の AI に取り込ませます。

| ファイル | 何のためか |
|---|---|
| `package.json` | テストの道具(Playwright Test)の名前と、`npm test` でテストを走らせる設定 |
| `playwright.config.js` | テストを Chromium(Chrome の元になっているブラウザ)1つで動かす設定 |
| `tests/example.spec.js` | 見本のテスト1本。`index.html` をブラウザで直接開き、ページが出てエラーが起きないことを確かめる。spec.md の条件のテストは、この形をまねて足す |

前提: `index.html` をブラウザで開けば見られる作り(HTML / CSS / JavaScript)で、Node.js が入っていること(`node --version` で確かめる)。
サーバーは使いません。1回のテストごとに新しいブラウザで開くので、ブラウザに保存した記録がテストの間で混ざりません。

## 取り込み方(作る役の AI に頼む)

```text
https://github.com/max-enterme/ai-course/tree/main/templates/web-test にある
package.json・playwright.config.js・tests/example.spec.js を、このプロジェクトの一番上に同じ名前で取り込んでください。
- README.md は取り込まないでください
- すでに同じ名前のファイルがあれば、上書きせずに止まって教えてください
- .gitignore に node_modules/ と test-results/ と playwright-report/ が無ければ足してください
- 取り込んだら npm install と npx playwright install chromium を実行し、npm test でテストを走らせて結果を見せてください
```

AGENTS.md に「ライブラリや追加のインストールは使わない」と書いてあると、AI が止まることがあります。そのときは AGENTS.md の作りの行に次の1行を足させます。

```text
- テストの道具(Playwright Test)だけは使ってよい。テストは tests/ に置き、npm test で走らせる
```

## 確かめ方(自分で見る)

1. `npm test` の結果に `1 passed` と出る(✓)
2. AI に「script.js にわざと1か所エラーを入れて npm test を走らせ、失敗するのを見せて。見せたら元に戻して」と頼み、`1 failed` と出る(✗)のを見る。戻したあと、もう一度 `1 passed` になるのを見る
3. `package.json`・`package-lock.json`・`playwright.config.js`・`tests/` は commit する。`node_modules/`・`test-results/`・`playwright-report/` は commit しない(GitHub の画面で入っていないのを見る)

## ここから先

```text
spec.md の条件を1つずつ確かめるテストを、tests/example.spec.js の形をまねて作ってください。
条件1つにテスト1つ以上。テストの名前は spec.md の条件の文をそのまま使ってください。
```

以降の周では、毎周テストを足して走らせます。テストも AI が書くので、テストが通った = 絶対に正しい、ではありません。手での確認もやめません。
