let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
}));

const container = document.querySelector("div#container");
const compSelection = document.querySelector("div#computer-selection");
const roundOutcome = document.querySelector("div#round-outcome");
const roundResult = document.querySelector("div#round-result");
const winnerDisplay = document.querySelector("div#winner-display");

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
    compSelection.textContent = `Computer played ${computerChoice}`;

    if (humanChoice === computerChoice) {
        roundOutcome.textContent = 'DRAW!';
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        humanScore++;
        roundOutcome.textContent = 'You win! Rock breaks Scissors.';
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        humanScore++;
        roundOutcome.textContent = 'You win! Paper covers Rock.';
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        humanScore++;
        roundOutcome.textContent = 'You win! Scissors cuts Paper.';
    } else if (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') {
        computerScore++;
        roundOutcome.textContent = 'Computer wins! Rock breaks Scissors.';
    } else if (computerChoice === 'PAPER' && humanChoice === 'ROCK') {
        computerScore++;
        roundOutcome.textContent = 'Computer wins! Paper covers Rock.';
    } else if (computerChoice === 'SCISSORS' && humanChoice === 'PAPER') {
        computerScore++;
        roundOutcome.textContent = 'Computer wins! Scissors cuts Paper.';
    }

    roundResult.textContent = `Human ${humanScore} : ${computerScore} Computer`;

    if (humanScore === 5 || computerScore === 5) {
        gameOver();
    }

}

function gameOver() {
    if (humanScore === 5) {
        winnerDisplay.textContent = "YOU WON THE GAME";
    } else {
        winnerDisplay.textContent = "COMPUTER WON THE GAME";
    }
    disablePlayerButtons();
    showResetButton();
}

function showResetButton() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "RESTART GAME";
    container.appendChild(resetBtn);
    resetBtn.addEventListener("click", () => {
        resetGame(resetBtn);
    });
}


function resetGame(resetBtn) {
    humanScore = 0;
    computerScore = 0;
    compSelection.textContent = "";
    roundOutcome.textContent = "";
    roundResult.textContent = "";
    winnerDisplay.textContent = "";
    resetBtn.remove();
    enablePlayerButtons();
}

function disablePlayerButtons() {
    buttons.forEach(button => button.disabled = true);
}
function enablePlayerButtons() {
    buttons.forEach(button => button.disabled = false);
}

