// Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".



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

const actionWhenFound = function (index) {
  console.log(`Found him at index ${index}! `);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
findWaldo(["Alice", "Bob", "Winston"], actionWhenFound);