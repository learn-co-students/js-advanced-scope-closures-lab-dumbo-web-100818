function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let end = parseInt(endBlock)
    let start = parseInt(startBlock)
    let distance = Math.abs(end-start)
    if (distance > blockRange){
      return `${Math.abs(distance - blockRange)} blocks out of range`
    }
    else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(decimal){
  return function(fare){
    return fare * decimal
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
