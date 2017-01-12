function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    let index = arr.indexOf(arr[i]);
    let name = arr[i];
    if (arr[i] === "Waldo") {
      found(name, index);
      // let walGuy
      //   arr.forEach(function(word) {
      }
  }      // execute callback
}

function actionWhenFound(name, index) {
  console.log("Found " + name + " at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);