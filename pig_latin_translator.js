//  Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

const originalWords = process.argv.slice(2);
const pigLatinWords = [];

function translateToPigLatin(word) {
  return word.slice(1) + word[0] + "ay";
}

for (let i = 0; i < originalWords.length; i++) {
  //console.log(translateToPigLatin(originalWords[i]));
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(" "));