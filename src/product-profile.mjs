export const productProfile = {
  "repository": "settings-secrets-extension-design-view",
  "title": "設定・秘密値・拡張設計ビュー",
  "domain": "VSCodeExtension",
  "hostApp": null,
  "rank": 35,
  "ideaNo": 5,
  "overview": ".env、settings.json、contributes.configuration、コマンドパレットを管理する。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "設定差分や秘密値の混入に気づきにくい。",
  "differentiation": "差分、警告、GUI編集を安全な確認フローにする。",
  "publish": "GitHub Release / VSIX",
  "surface": "VS Code extension + webview",
  "entity": "settings review item",
  "requiredFields": [
    "id",
    "title",
    "source",
    "settingKey",
    "safeValue",
    "owner",
    "acceptance"
  ],
  "warningField": "secretRisk",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
