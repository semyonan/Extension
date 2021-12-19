const path = require('path');

const tests = require('./suite/index.plain');

async function main() {
	try {
		tests.run();
		
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
