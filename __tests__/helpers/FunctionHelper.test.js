import {degreeToRadian, distanceBetweenTwoPointByKm} from "../../src/helpers/FunctionHelper";
import {EARTH_RADIUS} from "../../src/ultils/Constants";

describe('degreeToRadian()', () => {

	it('Input with a number', () => {
		expect(degreeToRadian( -15.66666)).toBe(-15.66666* Math.PI / 180);
	});

	it('Input is not a number', () => {
		expect(degreeToRadian("gsgsg")).toBeNaN() &&
		expect(degreeToRadian({})).toBeNaN() &&
		expect(degreeToRadian([])).toBeNaN();
	});

	it('Input empty or null', () => {
		expect(degreeToRadian()).toBeNaN() &&
		expect(degreeToRadian(null)).toBeNaN();
	});
});

describe('distanceBetweenTwoPointByKm()', () => {

	// Test with correct syntax
	it('Input with correct syntax', () => {

		const start = {latitude: 1.25, longitude: 1.22};
		const end = {latitude: 2.12, longitude: 2.6};

		expect(distanceBetweenTwoPointByKm(start, end, EARTH_RADIUS)).toBe(
			EARTH_RADIUS*Math.acos(Math.sin(1.25) * Math.sin(2.12) + Math.cos(1.25) * Math.cos(2.12) * Math.cos(1.22 - 2.6)
			));
	});


/*Test with wrong syntax uncomment to running it;*/

/*	it('Input with wrong syntax', () => {
		expect(distanceBetweenTwoPointByKm(undefined, {latitude: -100, longitude: -100}, 1000)).toThrow(TypeError) &&
		expect(distanceBetweenTwoPointByKm({latitude: 100, longitude: 100}, undefined, 1000)).toThrow(TypeError) &&
		expect(distanceBetweenTwoPointByKm({latitude: 100, longitude: 100}, {latitude: -100, longitude: -100}, undefined)).toThrow(TypeError) &&
		expect(distanceBetweenTwoPointByKm()).toThrow(TypeError) &&
		expect(distanceBetweenTwoPointByKm({}, "gsgs", [])).toThrow(TypeError) &&
		expect(distanceBetweenTwoPointByKm(12, "gasgs", {})).toThrow(TypeError);
	});*/

});

