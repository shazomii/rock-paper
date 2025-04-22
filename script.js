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



function playGame() {
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

    function gameOver() {
        console.log('GAME OVER!');

        if (computerScore === humanScore) {
            console.log("Draw!");
        } else if (computerScore > humanScore) {
            console.log('Computer Wins!');
        } else {
            console.log('You win!'); '';
        }
    }

    for (i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`COMPUTER ${computerScore} : ${humanScore} HUMAN`);
    }

    gameOver();
}

playGame();