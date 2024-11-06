// Write code to filter this list down to only passing grades.
// This node script should print out passing grades to the console. Passing grades for this scenario can be those that are 70 or above.
// TIPS 
// Use the Array filter function (as shown previously) to print out only the passing grades.
// Start by declaring the callback function and then later refactor it to be inline and anonymous, or start with an anonymous function to begin with.
// Convert the anonymous function into an arrow function in order to get some practice with them.



// **** declaring the callback function ****

/* const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

function isPassing(num) {
  return num >= 70
}

const passed = grades.filter(isPassing) 
console.log(passed); */



// ***** Refactored using anonymous function *****

/* const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passed = grades.filter(function(num) {
 return num >= 70 
});
console.log(passed); */


// ***** Convert the anonymous function into an arrow function *****

const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passed = grades.filter (num => num >= 70);
console.log(passed);