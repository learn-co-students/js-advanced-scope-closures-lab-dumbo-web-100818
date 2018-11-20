const produceDrivingRange = function(range) {
	return function(start, end) {
		let start_n = parseInt(start.replace('th',''))
		let end_n = parseInt(end.replace('th',''))
		let diff = Math.abs(start_n - end_n)

		if(diff > range) {
			return `${diff - range} blocks out of range`
		}else {
			return `within range by ${range - diff}`
		}
	}
}

const produceTipCalculator = function(perc) {
	return function(price) {
		return price * perc
	}
}

let id = 0
const createDriver = function() {
	return function(name) {
		return {'name': name, 'id': id++}
	}
}