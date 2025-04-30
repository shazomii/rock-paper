let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
}));

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

function playRound(humanChoice, computerChoice) {
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

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore === 5 || computerScore === 5) {
        gameOver();
    }

}

function gameOver() {
    if (humanScore === 5) {
        console.log("YOU WON THE GAME");
    } else {
        console.log("COMPUTER WON THE GAME");
    }
    resetGame();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

