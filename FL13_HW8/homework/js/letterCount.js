function letterCount(word, findLetter) {
  const wordLowerRegister = word.toLowerCase();
  const findLetterLowerRegister = findLetter.toLowerCase();
  let occurrences = 0;

  for (let letter of wordLowerRegister) {
    occurrences += findLetterLowerRegister === letter ? 1 : 0;
  }
  return occurrences;
}

letterCount('Maggy', 'g');
letterCount('Barry', 'b');
letterCount('', 'z');


