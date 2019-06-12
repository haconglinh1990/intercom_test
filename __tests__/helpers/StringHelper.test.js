import {customStringify, fileError, introString, resultString, syntaxError} from "../../src/helpers/StringHelper";

describe('resultString()', () => {

	it('Add file path to the introString', () => {
		expect(introString( "/home/haconglinh1990/Data/Test")).toBe(
			`\tWelcome to the Intercom program !
=================================================\n
The input file of the program have to put at: /home/haconglinh1990/Data/Test
You can change the data sample for testing !
`);
	});

	it('Add file path to the string', () => {
		expect(resultString( "/home/data")).toBe("The output of the program had been saved at : /home/data");
	});

	it('Add file path to the fileError string', () => {
		expect(fileError( "/home/Test")).toBe("We can't open file at /home/Test");
	});

	it('Add file type and path to the syntaxError string', () => {
		expect(syntaxError( "close","Movie")).toBe(`We couldn't close this data:\nMovie`) &&
		expect(syntaxError( "open", "Document")).toBe(`We couldn't open this data:\nDocument`);
	});

	it('Custom Stringify', () => {
		expect(customStringify({name: 'Linh Ha Cong', user_id: 1 })).toBe('{"name": "Linh Ha Cong", "user_id": 1}');
	});

});