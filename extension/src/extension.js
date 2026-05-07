function activate(context) {
  const disposable = vscode.commands.registerCommand("settings-secrets-extension-design-view.open", () => {
    vscode.window.showInformationMessage("設定・秘密値・拡張設計ビュー: npm test で検証できます。");
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

const vscode = require("vscode");
module.exports = { activate, deactivate };
