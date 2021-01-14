// import functions and grab DOM elements
import { getRandThrow } from '/get-random-throw.js';

const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const winsDisplay = document.getElementById('times-won');
const totalsDisplay = document.getElementById('times-played');
const tiesDisplay = document.getElementById('times-draw');


// initialize state
//default string values to display when user clicks reset button
const defaultStrings = [
    'Wins will show here', 
    'Total plays will show here', 
    'Times tied will show here'];

//declare some string values 
const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';
// initialize counts for totals
let totalPlays = 0;
let totalWins = 0;
let totalTies = 0;

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
    if (userGuess === compChoice) userDraw = true;
    if (userGuess === rock && compChoice === scissors) userWin = true;
    if (userGuess === paper && compChoice === rock) userWin = true;
    if (userGuess === scissors && compChoice === paper) userWin = true;

    if (userWin){
        totalWins++;
        userWin = false;
    }
    if (userDraw){
        totalTies++;
        userDraw = false;
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
    testIfWin(userGuess, compChoice);
    //declare the strings for the wins, total, and draws
    let winString = `You won: ${totalWins} times!`;
    let totalString = `You played ${totalPlays} times!`;
    let drawString = `You tied ${totalTies} times!`;
    //display the strings for wins, total, and draws
    winsDisplay.textContent = winString;
    totalsDisplay.textContent = totalString;
    tiesDisplay.textContent = drawString; 
});

resetButton.addEventListener('click', () => {
    totalWins = 0;
    totalPlays = 0;
    totalTies = 0;
    winsDisplay.textContent = defaultStrings[0];
    totalsDisplay.textContent = defaultStrings[1];
    tiesDisplay.textContent = defaultStrings[2]; 
});