# 導入手順

## ローカル検証

```powershell
cd D:\AI\VSCodeExtension\settings-secrets-extension-design-view
npm test
npm start
```

## 配布前確認

- `dist/settings-secrets-extension-design-view-docs.zip` を確認する。
- `docs/release-checklist.md` を完了状態にする。
- GitHub Release / VSIX に出す前に手動テストを実施する。

## 追加ツール

現時点でグローバルツールの追加導入は不要。必要になった場合は `E:\DevEnv` 以下に配置する。
