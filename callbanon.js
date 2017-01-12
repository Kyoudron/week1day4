var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// for(var key in input) {
//   let theX = input[key].x
//   let theY = input[key].y

//   console.log((theY*theY)+ (theX * theX))
//  }

var result = input.map(function(sqz){
  var zed = sqz.x * sqz.x + sqz.y * sqz.y;
  result = Math.sqrt(zed);
  return result

})



console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

