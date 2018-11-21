function produceDrivingRange(blockRange){
  return function(startPoint,endPoint){

    let start = parseInt(startPoint)
    let end = parseInt(endPoint)
      // abs is for finding the total value for a number it returns the absolute value
    travel = Math.abs(end-start)
    mileage = blockRange - travel

    if (mileage > 0){
      return `within range by ${mileage}`
    } else {
      return `${Math.abs(mileage)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function(amount){
     return tip*amount
  }
}


function createDriver(){
  // first set the driver id to 0 with let so we can have the variable increase
  let driverId = 0
  // almost like ruby we are then going to tell the function to return a class
  return class{
    // in here this is equivelent to self in ruby so we want to assign the instance of this driver an id and a name
    // constructor function  is just like initialize in ruby we are telling it what to have when a driver is created
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
