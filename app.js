let playerscore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let playerSelection;

function playRound(playerSelection, computerSelection) {
    const computerButtons = document.querySelectorAll(".buttonforcomputer button"); 
    
    // Remove  "selected" class from all computer buttons
    computerButtons.forEach((button) => {
        button.classList.remove("selected");
    });

    // Add "selected" class to the computer's choice button
    const computerSelectedButton = document.querySelector(`.buttonforcomputer .${computerSelection}`);
    // computerSelectedButton.classList.add("selected");

    if (playerSelection === computerSelection) {
        playerscore++;
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerscore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerscore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerscore++;
    }

    roundsPlayed++;
    updateScoreDisplay();

    setTimeout(() => {
        computerSelectedButton.classList.remove("selected");
    }, 300);
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    }
    if (random === 2) {
        return "paper";
    }
    if (random === 3) {
        return "scissors";
    }
}

function updateScoreDisplay() {
    const currentScoreElement = document.getElementById("currentScore");
    currentScoreElement.textContent = `Current Score: Player: ${playerscore} Computer: ${computerScore}`;
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    playerscore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScoreDisplay();
    document.getElementById("finalScore");
    document.getElementById("currentScore");
}