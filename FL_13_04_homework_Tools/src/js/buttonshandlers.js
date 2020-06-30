import {computerMove, showPositiveResult, showNegativeResult, showUserWon, showComputerWon, showDrawResult} from './additionalfunction';
import  {rock, scissors, papper, options} from './constant'

let userPoints = 0;
let computerPoints = 0;

rock.addEventListener('click', () => {
    const computerResult = computerMove(options);
    if (computerResult === options[1]) {
        showPositiveResult('Rock', computerResult);
        userPoints++;
       showUserWon(userPoints);
    } else if (computerResult === options[2]) {
        showNegativeResult('Rock', computerResult);
        computerPoints++;
        showComputerWon(computerPoints);
    } else {
        showDrawResult();
    }
   
});

scissors.addEventListener('click', () => {
    const computerResult = computerMove(options);
    if (computerResult === options[2]) {
        showPositiveResult('Scissors', computerResult)
        userPoints += 1;
        showUserWon(userPoints);
    } else if (computerResult === options[0]) {
        showNegativeResult('Scissors', computerResult);
        computerPoints += 1;
        showComputerWon(computerPoints);
    } else {
        showDrawResult();
    }
    
});

papper.addEventListener('click', () => {
    const computerResult = computerMove(options);
    if (computerResult === options[0]) {
        showPositiveResult('Papper', computerResult);
        userPoints += 1;
        showUserWon(userPoints);
    } else if (computerResult === options[1]) {
        showNegativeResult('Papper', computerResult);
        computerPoints += 1;
        showComputerWon(computerPoints);
    } else {
        showDrawResult();
    }
});
