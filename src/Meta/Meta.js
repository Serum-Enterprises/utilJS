function __stack() {
	// Keep the original Error.prepareStackTrace function and override it with a function that just returns the stack
	const originalPrepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => { return stack; };

	// Create a new Error, and capture the stack for the function calling this one
	const temporaryError = new Error();
	Error.captureStackTrace(temporaryError, arguments.callee);

	// Get the stack from the Error and restore the original Error.prepareStackTrace function
	const stack = temporaryError.stack;
	Error.prepareStackTrace = originalPrepareStackTrace;

	// Return the stack
	return stack;
}


function __line() {
	return __stack()[1].getLineNumber();
}

function __column() {
	return __stack()[1].getColumnNumber();
}

module.exports = { __stack, __line, __column };