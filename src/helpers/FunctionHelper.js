export const degreeToRadian = (degree) => degree * Math.PI / 180;

export const distanceBetweenTwoPointByKm = (start, end, earthRadius) => {

	if(	!start || !end || !earthRadius ||
		isNaN(start.latitude) || isNaN(start.longitude) || isNaN(end.latitude) || isNaN(end.longitude) || isNaN(earthRadius)
	) throw new TypeError("Input type wrong");

	const centralAngle = Math.acos(
		Math.sin(start.latitude) * Math.sin(end.latitude) +
		Math.cos(start.latitude) * Math.cos(end.latitude) * Math.cos(start.longitude - end.longitude)
	);
	return earthRadius * centralAngle;
};