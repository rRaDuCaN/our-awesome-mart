const { appendFileSync, readFileSync, writeFileSync, readdirSync } = require('fs');
const { resolve } = require('path');

function appendDataSet(url) {
	return function appendData(data) {
		appendFileSync(resolve(url), data);
	};
}

function JSON_prettify(toBeStringified) {
	return JSON.stringify(toBeStringified, null, '\t');
};

function readDataSet(url) {
	return readFileSync(resolve(url), 'utf8');
}

function readDataFiles(path) {
	let arr = [];
	try {
		arr = readdirSync(resolve(path));
	} catch (e) {
		console.error(`!!!An error is being thrown:  :( :( :( :( !!! ${e}`);
	}
	return arr;
}

function toPipe(...fns) {
	return function piped(result) {
		var funcList = [...fns];

		for (const func of funcList) {
			// take the first function from the list
			// and execute it
			result = func(result);
		}

		return result;
	};
}

function writeDataSet(url) {
	return function write(data) {
		writeFileSync(resolve(url), data);
	};
}

module.exports = {appendDataSet, JSON_prettify, readDataSet, readDataFiles, toPipe, writeDataSet};