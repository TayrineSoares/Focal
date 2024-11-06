// Use the map method on lighthouses so that we instead see an array of numbers.

// The array of numbers should be the length of each name in the lighthouses.


const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const locationsLength = lighthouses.map((locations) => locations.length)
console.log(locationsLength);

// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

