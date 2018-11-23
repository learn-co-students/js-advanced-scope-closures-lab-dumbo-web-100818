// function produceDrivingRange(num1){
//   return function (num2){
//     return num1 + num2
//   }
// }

function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){

    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(amount){
  amount / 100
 return function(money){
  return money * amount
 }
}

function createDriver() {
  let DriverId = 0;

    return class {
      constructor(name){
        this.name = name;
        this.id = ++DriverId;
      }
    }
}

// function items(){
//  let ItemId = 0;
//
//  return class{
//   constructor(name){
//    this.name = name;
//    this.id = ++ItemId;
//   }
//  }
// }
