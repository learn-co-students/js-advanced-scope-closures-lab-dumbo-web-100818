function produceDrivingRange(blockRange) {
  return function (distance1, distance2){
    let fixedDistance1 = distance1.split('th');
    let fixedDistance2 = distance2.split('th');
    let distance = Math.abs(fixedDistance2[0] - fixedDistance1[0]);
    if  (distance > blockRange) {
      return `${distance-blockRange} blocks out of range`;
    } else if (distance <= blockRange) {
      return `within range by ${distance}`;
    }
    };
  }

function produceTipCalculator(tip) {
  return function (price) {
    return tip * price;
  };
}

function createDriver() {
  let itemId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = itemId++;
    }

  }
}

