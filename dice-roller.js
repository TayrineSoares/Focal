function rollDice(numDice) {
  const results = [];
  for (let i = 0; i < numDice; i++) {
      results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}
const numDice = parseInt(process.argv[2]);
const results = rollDice(numDice);
console.log(`Rolled ${numDice} dice: ${results}`);