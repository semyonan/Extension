// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const replaceRegex = /\b(absolute|abstract|all|and_then|array|as|asm|attribute|begin|bindable|case|class|const|contains|default|div|else|end|except|export|exports|external|far|file|finalization|finally|forward|generic|goto|if|implements|import|in|index|inherited|initialization|interrupt|is|label|library|mod|module|name|near|not|object|of|on|only|operator|or_else|otherwise|override|package|packed|pow|private|program|protected|public|published|interface|implementation|qualified|read|record|resident|requires|resourcestring|restricted|segment|set|shl|shr|specialize|stored|strict|then|threadvar|to|try|type|unit|uses|var|view|virtual|dynamic|overload|reintroduce|with|write|xor|function|procedure|constructor|destructor|break|continue|exit|abort|while|do|for|raise|repeat|until|true|false|nil|ansichar|ansistring|boolean|byte|cardinal|char|comp|currency|double|dword|extended|file|integer|int64|longint|longword|nativeint|nativeuint|olevariant|pansichar|pchar|pwidechar|pointer|real|shortint|shortstring|single|smallint|string|uint64|variant|widechar|widestring|word|wordbool)\b/ig;

function replaceText(text, convertFn) {
	return text.replace(replaceRegex, convertFn);
}

function updateEditorText( convertFn ) {

	let editor = vscode.window.activeTextEditor;
	if (editor) {
		let text = editor.document.getText();
		let fullRange = new vscode.Range(
			editor.document.positionAt(0),
			editor.document.positionAt(text.length - 1)
		)
		editor.edit(builder =>  
			builder.replace(fullRange, replaceText(text, convertFn))
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
	console.log('Congratulations, your extension "ann-pascal-ext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	context.subscriptions.push([
		vscode.commands.registerCommand('ann-pascal-ext.toUppercase', function () {
			// The code you place here will be executed every time your command is executed

			updateEditorText(word => word.toUpperCase());

			// Display a message box to the user
			//vscode.window.showInformationMessage('To Uppercase!');
		}),
		vscode.commands.registerCommand('ann-pascal-ext.toLowercase', function () {
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
	deactivate,
	replaceText
}

