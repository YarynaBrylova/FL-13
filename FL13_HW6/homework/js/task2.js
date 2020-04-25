let inputWord = prompt('Enter a word:', '');

const dividedInputWord = 2;

if (inputWord === '' || inputWord === null) {
  alert('Invalid value');
} else if (inputWord.length % dividedInputWord === 0) {
  alert(
    inputWord.slice(
      inputWord.length / dividedInputWord - 1,
      inputWord.length / dividedInputWord + 1
    )
  );
} else {
  alert(inputWord[Math.floor(inputWord.length / dividedInputWord)]);
}
