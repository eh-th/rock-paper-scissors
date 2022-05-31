const outputs = ["rock", "paper", "scissors"]
let computerSelection
let playerScore = 0
let computerScore = 0
let playerSelection
let playResult
let winner

function computerPlay(choices) {
    //we apply a random method to the outputs array in order to randomize the computer's choice
    computerSelection = choices[Math.floor(Math.random() * choices.length)]
    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    //Print the players choices
        playersChoices.textContent =`You chose ${playerSelection}, computer chose ${computerSelection}. `
        
        //player wins if
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        //we then add one point to the player's score
            playerScore++;
        //we change the content of the result div
            result.textContent = `You win, ${playerSelection} beats ${computerSelection}.`; 
        
            //computer wins if
        } else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock')) {
        //we then add one point to the computer's score
            computerScore++;
        //we change the content of the result div
            result.textContent = `You loose, ${computerSelection} beats ${playerSelection}.`; 
        
            //otherwise it's a tie
        } else {
            //we change the content of the result div
            result.textContent = "It's a tie!"
        }
        //Display the current score
        runningScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
        
        
        //Begin a new loop to check if we have a winner
        if (computerScore == 5) {
            result.textContent = `Computer wins!`
        } else if (playerScore == 5) {
            result.textContent = "Player wins!"
        } 
}   

//Add some events for the buttons
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
//display each player choice for every round
const playersChoices = document.createElement('playersChoices')
//display the running score
const runningScore = document.createElement('runningScore')
//create a result div
const result = document.createElement('result');
//add the result dic to the container

container.appendChild(p)
container.appendChild(runningScore)
p.appendChild(playersChoices)
p.appendChild(result);