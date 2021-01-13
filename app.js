// import functions and grab DOM elements


const playButton = document.getElementById('play-button');
const winsDisplay = document.getElementById('times-won');
const totalsDisplay = document.getElementById('times-played');
const tiesDisplay = document.getElementById('times-draw');

// initialize state


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
    //declare some strong values 
    const paper = 'paper';
    const rock = 'rock';
    const scissors = 'scissors';
    // initialize counts for totals
    let totalPlays = 0;
    let totalWins = 0;
    let totalTies = 0;

    
 
playButton.addEventListener('click', () => {
    //grab the selected radio input on click
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    //declar variable to store value of clicked radio input
    const userGuess = selectedRadioButton.value;
    //increment the total plays
    totalPlays++;

    //declare the strings for the wins, total, and draws
    let winString = `You won: ${totalWins} times!`;
    let totalString = `You played ${totalPlays} times!`;
    let drawString = `You tied ${totalTies} times!`;


    //display the strings for wins, total, and draws
    winsDisplay.textContent = winString;
    totalsDisplay.textContent = totalString;
    tiesDisplay.textContent = drawString;
    
    winsDisplay.textContent = winString;
    totalsDisplay.textContent = totalString;
    tiesDisplay.textContent = drawString;
    

    const getRandThrow = Math.round(Math.random() * 2);
    let compChoice = convertCompNumToValue(getRandThrow);
    console.log('comps choice value is ' + compChoice);
   
    
    let userWin = false;
    let userDraw = false;
  
    //comparePlays(userGuess, compChoice) ? userMatch = true : userMatch = false;

    console.log(userGuess);
    console.log(compChoice); 

    if (userGuess === compChoice) userDraw = true;
    if (userGuess === rock && compChoice === scissors) userWin = true;
    if (userGuess === paper && compChoice === rock) userWin = true;
    if (userGuess === scissors && compChoice === paper) userWin = true;

    if (userWin){
        totalWins++;
         
    }
    if (userDraw){
        totalTies++;
    }
   
   
   

    
});