let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".choice-btn");

buttons.forEach((button) => button.addEventListener("click", () => {
    playRound(button.textContent, getComputerChoice());
}));

const compSelection = document.querySelector("div#computer-selection");
const roundOutcome = document.querySelector("div#round-outcome");
const roundResult = document.querySelector("div#round-result");
const winnerDisplay = document.querySelector("div#winner-display");
const gameContainer = document.querySelector(".game-container");

compSelection.style.display = "none";
winnerDisplay.style.display = "none";


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
    // Reset animations
    compSelection.style.animation = 'none';
    roundOutcome.style.animation = 'none';
    roundResult.style.animation = 'none';

    // Trigger reflow
    compSelection.offsetHeight;
    roundOutcome.offsetHeight;
    roundResult.offsetHeight;

    // Restart animations
    compSelection.style.animation = 'fadeIn 0.5s ease-in-out forwards';
    roundOutcome.style.animation = 'fadeIn 0.5s ease-in-out 0.2s forwards';
    roundResult.style.animation = 'fadeIn 0.5s ease-in-out 0.4s forwards';

    compSelection.style.display = "block";
    compSelection.textContent = `Computer played ${computerChoice}`;

    if (humanChoice === computerChoice) {
        roundOutcome.textContent = 'DRAW!';
        roundOutcome.style.color = '#ffd93d';
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        humanScore++;
        roundOutcome.textContent = 'You win! Rock breaks Scissors.';
        roundOutcome.style.color = '#00ff88';
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        humanScore++;
        roundOutcome.textContent = 'You win! Paper covers Rock.';
        roundOutcome.style.color = '#00ff88';
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        humanScore++;
        roundOutcome.textContent = 'You win! Scissors cuts Paper.';
        roundOutcome.style.color = '#00ff88';
    } else if (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') {
        computerScore++;
        roundOutcome.textContent = 'Computer wins! Rock breaks Scissors.';
        roundOutcome.style.color = '#ff6b6b';
    } else if (computerChoice === 'PAPER' && humanChoice === 'ROCK') {
        computerScore++;
        roundOutcome.textContent = 'Computer wins! Paper covers Rock.';
        roundOutcome.style.color = '#ff6b6b';
    } else if (computerChoice === 'SCISSORS' && humanChoice === 'PAPER') {
        computerScore++;
        roundOutcome.textContent = 'Computer wins! Scissors cuts Paper.';
        roundOutcome.style.color = '#ff6b6b';
    }

    roundResult.textContent = `Human ${humanScore} : ${computerScore} Computer`;

    if (humanScore === 5 || computerScore === 5) {
        gameOver();
    }

}

function gameOver() {
    if (humanScore === 5) {
        winnerDisplay.textContent = "YOU WON THE GAME";
        winnerDisplay.style.background = "linear-gradient(45deg, #00ff88, #00d4ff)";
    } else {
        winnerDisplay.textContent = "COMPUTER WON THE GAME";
        winnerDisplay.style.background = "linear-gradient(45deg, #ff6b6b, #ee5a24)";
    }

    winnerDisplay.style.display = "block";
    disablePlayerButtons();
    showResetButton();
}

function showResetButton() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "RESTART GAME";
    resetBtn.className = "reset-btn";
    gameContainer.appendChild(resetBtn);
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
    compSelection.style.display = "none";
    winnerDisplay.style.display = "none";
    resetBtn.remove();
    enablePlayerButtons();
}

function disablePlayerButtons() {
    buttons.forEach(button => button.disabled = true);
}
function enablePlayerButtons() {
    buttons.forEach(button => button.disabled = false);
}

