// create the function 
// iterate through the array using a loop
// 
// use an If statement to identify the elements
const raisinAlarm = function (cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      return "Raisin alert!";
    }
  } 
  return "All good!";
};

const raisinAlarmArray = function (cookies) {
  results = [];
  //iterating through array of cookies
  for (const cookie of cookies) {
    results.push(raisinAlarm(cookie));
  }

  return results;
}; 


console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
