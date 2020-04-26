let confirmGame = confirm('Do you want to play a game?', '');

if (!confirmGame) {
  alert('You did not become a billionaire, but can');
} else {
  const minRandom = 0;
  const maxAttempt = 3;
  const increaseKoef = 2;
  const rangeKoef = 5;
  let currentPrice = 100;
  let maxPrice = 100;
  let maxRandom = 5;
  let prize = 0;

  game: for (let gameCounter = 0; ; gameCounter++) {
    let randomNumber = Math.floor(
      Math.random() * (maxRandom - minRandom + 1) + minRandom
    );

    for (
      let attemptCounter = 0;
      attemptCounter < maxAttempt;
      attemptCounter++
    ) {
      let continueGame = false;
      let playAgain = false;
      let userNumber = +prompt(
        `
      Choose a roulette pocket number from ${minRandom} to ${maxRandom}
      Attempts left: ${attemptCounter + 1}
      Total: ${prize}
      Possible prize on current attempt: ${currentPrice}`,
        ''
      );
      if (userNumber === randomNumber) {
        prize += currentPrice;
        continueGame = confirm(
          `Congratulation, you won!   Your prize is: ${prize} $. Do you want to continue?`
        );
        if (continueGame) {
          maxRandom += rangeKoef;
          maxPrice *= increaseKoef;
          currentPrice = maxPrice;
          continue game;
        } else {
          alert(`Thank you for your participation. Your prize is: ${prize} $`);
          playAgain = confirm('Do you want to play again?');
          if (playAgain) {
            gameCounter = 0;
            continue;
          } else {
            break game;
          }
        }
      } else {
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
        playAgain = confirm('Do you want to play again?');
        if (playAgain) {
          currentPrice /= increaseKoef;
        } else {
          break game;
        }
      }
    }
  }
}
