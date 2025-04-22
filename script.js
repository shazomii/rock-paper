function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        default:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter Rock, Paper, or Scissors:');
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log('Draw');
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        humanScore++;
        console.log('You win! Rock breaks Scissors.');
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        humanScore++;
        console.log('You win! Paper covers Rock.');
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        humanScore++;
        console.log('You win! Scissors cuts Paper.');
    } else if (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') {
        computerScore++;
        console.log('Computer wins! Rock breaks Scissors.');
    } else if (computerChoice === 'PAPER' && humanChoice === 'ROCK') {
        computerScore++;
        console.log('Computer wins! Paper covers Rock.');
    } else if (computerChoice === 'SCISSORS' && humanChoice === 'PAPER') {
        computerScore++;
        console.log('Computer wins! Scissors cuts Paper.');
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);