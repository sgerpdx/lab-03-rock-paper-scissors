// import functions and grab DOM elements
import { getRandThrow, testIfWin } from '/utils.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winsDisplay = document.getElementById('times-won');
const totalsDisplay = document.getElementById('times-played');
const tiesDisplay = document.getElementById('times-draw');
const lossDisplay = document.getElementById('times-lost');
const compDisplay = document.getElementById('comp-threw');
const playerDisplay = document.getElementById('player-threw');

// initialize state
//default string values to display when user clicks reset button
const defaultStrings = [
    'Wins will show here', 
    'Total plays will show here', 
    'Times tied will show here', 
    'Times lost displays here'];

// initialize counts for totals
let totalPlays = 0;
let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;

// set event listeners to update state and DOM
function convertCompNumToValue(getRandThrow){
    if (getRandThrow === 0){
        return 'rock';
    } else if (getRandThrow === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function setElementStrings(){
    //declare the strings for the wins, total, and draws
    let winString = `You won: ${totalWins} times!`;
    let totalString = `You played ${totalPlays} times!`;
    let drawString = `You tied ${totalTies} times!`;
    let lossString = `You tied ${totalLosses} times!`;

    //display the strings for wins, total, and draws
    winsDisplay.textContent = winString;
    totalsDisplay.textContent = totalString;
    tiesDisplay.textContent = drawString; 
    lossDisplay.textContent = lossString;
    
}

playButton.addEventListener('click', () => {
    //grab the selected radio input on click
    //declar variable to store value of clicked radio input
    //increment the total plays
    //set comps choice to the random number returned from getRandThrow()
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const userThrow = selectedRadioButton.value;
    totalPlays++;
    let compChoice = convertCompNumToValue(getRandThrow());
    compDisplay.textContent = `Computer threw: ${compChoice}`;
    playerDisplay.textContent = `You threw: ${userThrow}`;
    //by default the user will guess the incorrect answer
    if (testIfWin(userThrow, compChoice) === 'win') {
        totalWins++;
    } else if (testIfWin(userThrow, compChoice) === 'draw'){
        totalTies++;
    } else {
        totalLosses++;
    }
    setElementStrings();
});

resetButton.addEventListener('click', () => {
    totalWins = 0;
    totalPlays = 0;
    totalTies = 0;
    totalLosses = 0;
    winsDisplay.textContent = defaultStrings[0];
    totalsDisplay.textContent = defaultStrings[1];
    tiesDisplay.textContent = defaultStrings[2]; 
    lossDisplay.textContent = defaultStrings[3];
});