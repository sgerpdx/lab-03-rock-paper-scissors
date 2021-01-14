export function getRandThrow(){
    return Math.round(Math.random() * 2);
}

const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';

export function testIfWin(userGuess, compChoice){
    if (userGuess === compChoice) return 'draw';
    if (userGuess === rock && compChoice === scissors) return 'win';
    if (userGuess === paper && compChoice === rock) return 'win';
    if (userGuess === scissors && compChoice === paper){ 
        return 'win';
    } else {
        return 'lose';
    }
}