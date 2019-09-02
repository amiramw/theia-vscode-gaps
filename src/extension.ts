import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "bugs" is now active!');

    debugger;
	vscode.workspace.onDidChangeConfiguration(e => {
		vscode.window.showInformationMessage("On did change! ");
	})

	let disposable = vscode.commands.registerCommand('bug.Start', () => {
		vscode.window.showInformationMessage('Activated');
	});
	context.subscriptions.push(disposable);

}


export function deactivate() {}
