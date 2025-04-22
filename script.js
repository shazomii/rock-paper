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

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt('Enter Rock, Paper, or Scissors:');
    return humanChoice.toUpperCase();
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;