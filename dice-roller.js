function rollDice(numDice) {
  const results = [];
  for (let i = 0; i < numDice; i++) {
      results.push(Math.floor(Math.random() * 6) + 1);
  }
  return results;
}
