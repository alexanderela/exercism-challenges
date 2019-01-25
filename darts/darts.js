export const solve = (x, y) => {
	if (typeof x || y !== 'number') {
		return null
	}
	if(x > 10 || y > 10) {
		return 0
	} else if((1 < x <= 5) || (1 < y <= 5)) {
		console.log('hitting 2nd conditional')
		return 5
	} else if (x <= 10 && y <= 10) {
		return 1
	}
}