function produceDrivingRange(blockRange) { return function(starty, endy) {
let result = parseInt(endy) - parseInt(starty)

if (result > blockRange) {
  return `${result - blockRange} blocks out of range`
} else {
  return `within range by ${blockRange - result}`
}
}}

function  produceTipCalculator(tipPer) { return function(numbs) {
  return numbs * tipPer
}}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++ driverId
    }
  }
}
