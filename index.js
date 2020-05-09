// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
	return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue) {
	return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, destination) {
	return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
	const distance = distanceTravelledInFeet(start, destination);

	if (distance <= 400) {
		return 0;
	} else if (distance <= 2000) {
		return (distance - 400) * 2 / 100;
	} else if (distance <= 2500) {
		return 25;
	} else {
		return 'cannot travel that far';
	}
}
