// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const textutils = require('./textutils');

function updateEditorText( convertFn ) {

	let editor = vscode.window.activeTextEditor;
	if (editor) {
		let text = editor.document.getText();
		let fullRange = new vscode.Range(
			editor.document.positionAt(0),
			editor.document.positionAt(text.length - 1)
		)
		editor.edit(builder =>  
			builder.replace(fullRange, 
				textutils.replaceText(text, convertFn))
		);
	}
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pascal-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	context.subscriptions.push([
		vscode.commands.registerCommand('pascal-ext.toUppercase', function () {
			// The code you place here will be executed every time your command is executed

			updateEditorText(word => word.toUpperCase());

			// Display a message box to the user
			//vscode.window.showInformationMessage('To Uppercase!');
		}),
		vscode.commands.registerCommand('pascal-ext.toLowercase', function () {
			// The code you place here will be executed every time your command is executed

			updateEditorText(word => word.toLowerCase());

			// Display a message box to the user
			//vscode.window.showInformationMessage('To Lowercase!');
		})
	]);

}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

