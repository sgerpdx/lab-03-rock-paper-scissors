
const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';

const winsDisplay = document.getElementById('times-won');
const totalsDisplay = document.getElementById('times-played');
const tiesDisplay = document.getElementById('times-draw');
const lossDisplay = document.getElementById('times-lost');

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

    return winString, totalString, drawString, lossString;
}


export function setDisplays(string1, string2, string3, string4) {
    //display the strings for wins, total, and draw
    winsDisplay.textContent = string1;
    totalsDisplay.textContent = string2;
    tiesDisplay.textContent = string3;
    lossDisplay.textContent = string4;

}