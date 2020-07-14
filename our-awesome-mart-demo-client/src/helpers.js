export function toPipe(...fns) {
	return function piped(result) {
		var funcList = [...fns];

		for (const func of funcList) {
			// take the first function from the list and execute it
			result = func(result);
		}

		return result;
	};
}

export function parsedObject(data) {
	return JSON.parse(JSON.stringify(data, null, ''))
}