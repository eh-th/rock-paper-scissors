const outputs = ["rock", "paper", "scissors"]
let computerSelection
let playerScore = 0
let computerScore = 0

function computerPlay(choices) {
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    return computerSelection
}

function playerPlay() {
    let playerSelection = prompt("Rock, Paper or Scissors?",'')
    playerSelection = playerSelection.toLowerCase()
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    playerScore++;
    return "You win!"; 
    } else {
        return "You lose!";
    }
}   

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay(outputs))};
    return `You won ${playerScore} rounds`;
}


console.log(game())