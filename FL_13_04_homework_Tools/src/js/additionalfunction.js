import  {scoreBlock} from './constant'

export {computerMove, showPositiveResult, showNegativeResult, showUserWon, showComputerWon, showDrawResult}

const computerMove = (arr) => {
    const randomIndex = Math.floor(Math.random() *3);
    const computerChoice = arr[randomIndex];

    return computerChoice;
}

const showPositiveResult = (userChoice, computerResult) => {
    scoreBlock.innerHTML = `${userChoice} vs ${computerResult}. You've WON!`
}

const showNegativeResult = (userChoice, computerResult) => {
    scoreBlock.innerHTML = `${userChoice} vs ${computerResult}. You've LOST!`
}

const showDrawResult = () => {
    scoreBlock.innerHTML = `DRAW! Try again!`
}

const showUserWon = (userPoints) => {
    if (userPoints === 3) {
        scoreBlock.innerHTML = 'Congradulations! You won the game!'
    }
}

const showComputerWon =(computerPoints) => {
    if (computerPoints === 3) {
        scoreBlock.innerHTML = 'Computer is the winner!'
    }
}