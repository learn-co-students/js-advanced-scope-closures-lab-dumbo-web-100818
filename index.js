  function produceDrivingRange(blockRange){
    return function(startBlock, endBlock){
      const start = parseInt(startBlock);
      const end = parseInt(endBlock);
      const range = Math.abs(start - end);
      const result = blockRange - range;
      if (result < 0) {
        return `${Math.abs(result)} blocks out of range`;
      } else {
        return `within range by ${result}`;
        };
      };
    };

    function produceTipCalculator(tipPercentage){
      return function(fare){
        return fare * tipPercentage;
      };
    }

    function createDriver(){
      let DriverId = 0
      return class {
        constructor(name){
          this.name = name;
          this.id = ++DriverId;
        }
      }
    }
