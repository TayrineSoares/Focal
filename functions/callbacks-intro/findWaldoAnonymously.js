// Refactor the code by making the callback anonymous.
// We should find our resulting code making no more reference to a named actionWhenFound function. It should instead declare and pass that behavior anonymously into findWaldo, all in one go!
// Manually test the output to make sure our change still works!

const findWaldo = function (names, found) {
  let waldoFound = false;
  names.forEach((name, index) => {
      if (name === "Waldo") {
      found(index); // // pass the index to the callback
      waldoFound = true;
    }
  });
  if (!waldoFound) {
    console.log(`Waldo was not found.`);
  }
};

//// Using an anonymous function as the callback

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found him at index ${index}! `)
});
findWaldo(["Alice", "Bob", "Winston"], function(index) {
  console.log(`Found him at index ${index}! `)
});