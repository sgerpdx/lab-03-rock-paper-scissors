// import functions and grab DOM elements
import { getRandThrow } from '/utils.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winsDisplay = document.getElementById('times-won');
const totalsDisplay = document.getElementById('times-played');
const tiesDisplay = document.getElementById('times-draw');
const lossDisplay = document.getElementById('times-lost');


// initialize state
//default string values to display when user clicks reset button
const defaultStrings = [
    'Wins will show here', 
    'Total plays will show here', 
    'Times tied will show here', 
    'Times lost displays here'];

//declare some string values 
const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';
// initialize counts for totals
let totalPlays = 0;
let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;

let userWin = false;
let userDraw = false;


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

function testIfWin(userGuess, compChoice){
    if (userGuess === compChoice) return 'draw';
    if (userGuess === rock && compChoice === scissors) return 'win';
    if (userGuess === paper && compChoice === rock) return 'win';
    if (userGuess === scissors && compChoice === paper){ 
        return 'win';
    } else {
        return 'lose';
    }
   
}

 
playButton.addEventListener('click', () => {
    //grab the selected radio input on click
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    //declar variable to store value of clicked radio input
    const userGuess = selectedRadioButton.value;
    //increment the total plays
    totalPlays++;
    //set comps choice to the random number returned from getRandThrow()
    let compChoice = convertCompNumToValue(getRandThrow());
    //call to test if user guess was correct
    

    //by default the user will guess the incorrect answer
    if (testIfWin(userGuess, compChoice) === 'win') {
        totalWins++;
    } else if (testIfWin(userGuess, compChoice) === 'draw'){
        totalTies++;
    } else {
        totalLosses++;
    }
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