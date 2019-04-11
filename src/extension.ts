// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "saywhat" is now active!');

  let getMessage = vscode.commands.registerCommand(
    "sayWhat.getMessage",
    async () => {
      // The code you place here will be executed every time your command is executed
      let message = await vscode.window.showInputBox();
      console.log("Logged from native sayWhat ext-> ", message);
    }
  );
  // might need to add this in sayHi
  context.subscriptions.push(getMessage);

  let getMessageFn = async () => {
    let message = await vscode.window.showInputBox();
    console.log("Logged from imported getMessageFn-> ", message);

    return message;
  };

  let api: any = {
    getMessageFn
  };
  // 'exports' public api-surface
  return api;
}

export function deactivate() {
  console.log("Say what is deactivated!");
}
