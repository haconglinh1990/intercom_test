export const introString = (path) => `\tWelcome to the Intercom program !
=================================================\n
The input file of the program have to put at: ${path}
You can change the data sample for testing !
`;

export const resultString = (path) => `The output of the program had been saved at : ${path}`;

export const fileError = (path) => `We can't open file at ${path}`;

export const syntaxError = (type, data) => `We couldn't ${type} this data:\n${data}`;

export const customStringify = (obj) => JSON.stringify(obj)
	.split(':')
	.join(': ')
	.split(',')
	.join(', ');