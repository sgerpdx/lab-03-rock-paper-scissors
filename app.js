// import functions and grab DOM elements
import { comparePlays } from '/utils.js';

const playButton = document.getElementById('play-button');


// initialize state


// set event listeners to update state and DOM
const compThrow = Math.round(Math.random() * 2);

function convertCompNumToValue(compThrow){
    if (compThrow === 0){
        return 'rock';
    } else if (compThrow === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

let compChoice = convertCompNumToValue(compThrow);



console.log( 'comps number is ' + compThrow);
console.log('comps choice value is ' + compChoice);
playButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const userGuess = selectedRadioButton.value;
    let userMatch = false;
    comparePlays(userGuess, compThrow) ? userMatch = true : userMatch = false; 

    console.log(selectedRadioButton.value);
});