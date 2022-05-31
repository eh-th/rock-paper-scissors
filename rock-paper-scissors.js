const outputs = ["rock", "paper", "scissors"]
let computerSelection
let playerScore = 0
let computerScore = 0
let playerSelection

function computerPlay(choices) {
    //we apply a random method to the outputs array in order to randomize the computer's choice
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    return computerSelection
}

function playerPlay() {
    /* we will prompt the user for a choice, 
    then make sure Rock or roCk becomes rock by applying .lowercase() */
    playerSelection = prompt("Rock, Paper or Scissors?",'')
    playerSelection = playerSelection.toLowerCase()
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    //Print the players choices
    console.log(`You chose ${playerSelection}, computer chose ${computerSelection}`)
    //player wins if
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    //we then add one point to the player's score
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`; 
    //computer wins if
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    //we then add one point to the computer's score
    computerScore++;
    return `You loose! ${computerSelection} beats ${playerSelection}.`; 
    //otherwise it's a tie
    } else {
        return "It's a tie!"
    }
}   

function game() {
    // we want to play five rounds
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay(outputs))};
    // we display the final score
    return `You won ${playerScore} rounds, computer won ${computerScore}`;
}


console.log(playRound(playerPlay(),computerPlay(outputs)))