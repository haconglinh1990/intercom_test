import fs from "fs";
import readline from "readline";
import {customStringify, fileError, resultString, syntaxError} from "./StringHelper";

export const readData = (filepath) => new Promise((resolve, reject) => {

	const readStream = fs.createReadStream(filepath);
	readStream.on('error', () => reject(new Error(fileError(filepath))));

	const readLineData = readline.createInterface({input: readStream});
	const customers = [];

	readLineData.on('line', (line) => {
		try {
			customers.push(JSON.parse(line));
		} catch (e) {
			reject(new Error(syntaxError("parse", line)));
		}
	});

	readLineData.on('close', () => resolve(customers));
});

export const writeData = (filepath, customers) => new Promise((resolve, reject) => {

	const writeStream = fs.createWriteStream(filepath);
	writeStream.on('error', () => reject(fileError(filepath)));

	customers.forEach((user) => {
		try {
			writeStream.write(`${customStringify(user)}\n`)
		} catch (e) {
			reject(new Error(syntaxError("write", user)));
		}
	});

	resolve(resultString(filepath));
	writeStream.end();
});