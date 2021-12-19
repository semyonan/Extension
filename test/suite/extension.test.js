const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
const myExtension = require('../../extension');

const simpleProgramText =
`prOgRam HelloWorld;
uSes crt;

BEgin
   writeln('Hello, World!');
   readkey;
eND. `;

const simpleProgramUpperCaseText =
`PROGRAM HelloWorld;
USES crt;

BEGIN
   writeln('Hello, World!');
   readkey;
END. `;

const simpleProgramLowerCaseText =
`program HelloWorld;
uses crt;

begin
   writeln('Hello, World!');
   readkey;
end. `;

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('To UpperCase test', () => {
		assert.strictEqual(simpleProgramUpperCaseText, 
			myExtension.replaceText(simpleProgramText, word => word.toUpperCase()));
	});

	test('To LowerCase test', () => {
		assert.strictEqual(simpleProgramLowerCaseText, 
			myExtension.replaceText(simpleProgramText, word => word.toLowerCase()));
	});

});
