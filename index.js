function produceDrivingRange(blockRange){
    return function(start, end){
      const distance = Math.round(parseInt(end)- parseInt(start));
      if (distance > blockRange){
        return `${distance - blockRange} blocks out of range`;
      }else {
        return `within range by ${blockRange - distance}`;
      }
  }

}

function produceTipCalculator(percent){
  return function(fare){
    return fare * percent;
  }
}

function createDriver(){
  let driverId = 0;
    return class Driver{
      constructor(name){
        this.name = name;
        this.id = ++driverId;
      }
    }
}
