import {readData, writeData} from "../../src/helpers/DataHelper";
import {INPUT_DATA_PATH, OUTPUT_DATA_PATH} from "../../src/gateway/DataSource";
import {resultString} from "../../src/helpers/StringHelper";

describe('readData()', () => {

	it('Read the file test', () => readData(INPUT_DATA_PATH)
		.then(res => {
			const sampleCustomerAtDataInputFile = [{"latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701"}];
			expect(res).toEqual(expect.arrayContaining(sampleCustomerAtDataInputFile));
		})
		.catch(e => {
			expect(e).toThrow(Error);
		})
	);

});

describe('writeData()', () => {

	const customers = [
		{ name: 'Ian Kehoe', user_id: 4 },
		{ name: 'Nora Dempsey', user_id: 5 },
		{ name: 'Theresa Enright', user_id: 6 },
		{ name: 'Eoin Ahearn', user_id: 8 },
		{ name: 'Richard Finnegan', user_id: 11 },
		{ name: 'Christina McArdle', user_id: 12 },
		{ name: 'Olive Ahearn', user_id: 13 },
		{ name: 'Michael Ahearn', user_id: 15 },
		{ name: 'Patricia Cahill', user_id: 17 },
		{ name: 'Eoin Gallagher', user_id: 23 },
		{ name: 'Rose Enright', user_id: 24 },
		{ name: 'Stephen McArdle', user_id: 26 },
		{ name: 'Oliver Ahearn', user_id: 29 },
		{ name: 'Nick Enright', user_id: 30 },
		{ name: 'Alan Behan', user_id: 31 },
		{ name: 'Lisa Ahearn', user_id: 39 }
	];

	it('Write the file test', () => writeData(OUTPUT_DATA_PATH, customers)
		.then(res => {
			expect(res).toEqual(resultString(OUTPUT_DATA_PATH));
		})
		.catch(e => {
			expect(e).toThrow(Error);
		})
	);

});