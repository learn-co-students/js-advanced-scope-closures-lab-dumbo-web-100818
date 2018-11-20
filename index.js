function produceDrivingRange(blockRange) {
  return function(start, end) {
    const startInt = parseInt(start);
    const endInt = parseInt(end);
    const distance = Math.abs(endInt - startInt);
    const difference = blockRange - distance;
    if (difference > 0) {
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    };
  };
};

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  };
};

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    };
  };
};
