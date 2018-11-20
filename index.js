
const produceDrivingRange = function(blockRange){
  return function(first, second){
    const distance = parseInt(second, 10) - parseInt(first, 10)
    if (distance > blockRange){
      return `${distance - blockRange} blocks out of range`
    }
    else {
      return `within range by ${blockRange - distance}`
    }
  }
}

const produceTipCalculator = function(percentage){
  return function(money){
    return money * percentage
  }
}

const createDriver = function(){
  let driverId = 0
  return class Driver {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
