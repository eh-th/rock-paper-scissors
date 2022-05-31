const outputs = ["rock", "paper", "scissors"]
let computerSelection
let playerScore = 0
let computerScore = 0
let playerSelection
let playResult

function computerPlay(choices) {
    //we apply a random method to the outputs array in order to randomize the computer's choice
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    return computerSelection
}

function playerPlay() {
    /* we will prompt the user for a choice, 
    then make sure Rock or roCk becomes rock by applying .lowercase() */
//    playerSelection = prompt("Rock, Paper or Scissors?",'')
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
    //we change the content of the result div
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`; 
    //computer wins if
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    //we then add one point to the computer's score
    computerScore++;
    //we change the content of the result div
    result.textContent = `You loose! ${computerSelection} beats ${playerSelection}.`; 
    //otherwise it's a tie
    } else {
        //we change the content of the result div
        result.textContent = "It's a tie!"
    }
}   

function game() {
    // we want to play five rounds
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay(outputs))};
    // we display the final score
    return `You won ${playerScore} rounds, computer won ${computerScore}`;
}

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return(button.id);
    });
});

//play a round with player choice = rock if player presses rock
const button1 = document.querySelector('#button1');
button1.addEventListener('click', () => {
    playRound("rock",computerPlay(outputs))
})

//play a round with player choice = paper if player presses paper
const button2 = document.querySelector('#button2');
button2.addEventListener('click', () => {
    playRound("paper",computerPlay(outputs))
})

//play a round with player choice = scissors if player presses scissors
const button3 = document.querySelector('#button3');
button3.addEventListener('click', () => {
    playRound("scissors",computerPlay(outputs))
})

//Display the result of the play
//define the parent div
const container = document.querySelector('#container');
const p = document.createElement('p')
//create a result div
const result = document.createElement('result');
//add the result dic to the container
container.appendChild(p)
p.appendChild(result);

//console.log(playRound(playerPlay(),computerPlay(outputs)))