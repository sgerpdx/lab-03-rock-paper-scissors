
const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';

export function testIfWin(userGuess, compChoice) {
    if (userGuess === compChoice) return 'draw';
    if (userGuess === rock && compChoice === scissors) return 'win';
    if (userGuess === paper && compChoice === rock) return 'win';
    if (userGuess === scissors && compChoice === paper) {
        return 'win';
    } else {
        return 'lose';
    }
}


export function setElementStrings(numOne, numTwo, numThree, numFour) {
    //declare the strings for the wins, total, and draws
    let winString = `You won: ${numOne} times!`;
    let totalString = `You played ${numTwo} times!`;
    let drawString = `You tied ${numThree} times!`;
    let lossString = `You lost ${numFour} times!`;

    //display the strings for wins, total, and draws
    winsDisplay.textContent = winString;
    totalsDisplay.textContent = totalString;
    tiesDisplay.textContent = drawString;
    lossDisplay.textContent = lossString;

}