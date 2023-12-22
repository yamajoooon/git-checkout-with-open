// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "git-checkout-with-open" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "git-checkout-with-open.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "今日はバンバンジー風と鶏白湯の中華スープを作りました. 日本酒で優勝しました. おいしかったです"
      );
    }
  );

  let food = vscode.commands.registerCommand("vscode-context.openDevio", () => {
    let editor = vscode.window.activeTextEditor;

    vscode.window.showInformationMessage(
      "今日はぶり大根を作りました. おいしかったです"
    );
  });

  context.subscriptions.push(disposable, food);
}

// This method is called when your extension is deactivated
export function deactivate() {}
