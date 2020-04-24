let inputWord = prompt('Enter a word:', '');

if (inputWord == false || inputWord == null) {
    alert('Invalid value');
} else if (inputWord.length % 2 === 0) {
    alert(inputWord.slice(inputWord.length / 2 - 1, inputWord.length / 2 + 1));
} else {
    alert(inputWord[Math.floor(inputWord.length / 2)]);
}
