// const produceDrivingRange = function(blockRange){
//   return function (){
//       if (blockRange > 10) {
//         return `${blockRange - 10} blocks out of range`;
//       } else if ( 10 > blockRange){
//         return`within range by ${10 - blockRange}`;
//       }
//   }
// }

const produceDrivingRange = function(blockRange){
  return function(startBlock, endBlock) {
    // tests pass in '10th' & '20th' so you have to use parseInt() which conveniently gets rid of ANY amount of letters that come *after* it!
    const start = parseInt(startBlock)
    const end = parseInt(endBlock)
    if(start > end){
      let tripDowntown = (start - end);
      return (tripDowntown > blockRange) ? `${tripDowntown - blockRange} blocks out of range`: `within range by ${blockRange - tripDowntown}`
    }else if (end > start){
      let tripUptown = (end - start);
      return (tripUptown > blockRange) ?  `${tripUptown - blockRange} blocks out of range`: `within range by ${blockRange - tripUptown}`
    }
  }
}
/*
Pay attention to the name of the function! 'produceDrivingRange' as in create a function that creates a function. For example we'd do:

  const tenBlocks = produceDrivingRange(10)

Then we'd always have that specific block range to reference. When we call tenBlocks, we'll get back a function that will determine whether the start and end blocks are out of range of the blockRange we defined in the oringal constant! So yes we need a function that will grab more information (like the salesTax/ salePrice problem) and use it to determine if the startBlock and endBlock are either outside or inside the specified range.
*/



const produceTipCalculator = function(percentage){
  return function(fare){
    return fare* percentage;
  }
}

const createDriver = function(){
let id = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++id;
    }
  }
}

// to create an 'instance' of something in JS you first have to create an anonymous function and store the 'primary key ID' at the top -- we want to use let because its dynamic. We then return a class which is like encapsulating an initializer inside curly braces that belong to the 'class' keywords
