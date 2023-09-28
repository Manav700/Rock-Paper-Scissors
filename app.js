let playerscore=0;
let computerScore=0;
let roundsPlayed = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log("It's a Draw my friend");
      playerscore++;
      computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("Computer Won!!");
      computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Player Won!!");
      playerscore++;
    }
     else if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log("Computer Won!!");
      computerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("Player Won!!");
      playerscore++;
    
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("Computer Won!!");
      computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log("Player Won!!");
      playerscore++;
    }
    roundsPlayed++;
    updateScoreDisplay();
    if (roundsPlayed === 5) {
      document.getElementById("finalScore").style.display = "block";
      document.getElementById("currentScore").style.display = "none"
  }

  }
function getComputerChoice(){
    let random = Math.floor(Math.random()*3) +1;
    if (random == 1){
       return "rock"
       
    }
    if (random == 2){
        return "paper"
       
    }
    if (random == 3){
       return "scissors"
    }

}
function updateScoreDisplay() {
  const currentScoreElement = document.getElementById("currentScore");
  currentScoreElement.textContent = `Current Score: Player: ${playerscore} Computer: ${computerScore}`;
}

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const sissorsButton = document.querySelector(".scissors")
const crockButton = document.querySelector(".crock")
const cpaperButton = document.querySelector(".cpaper")
const csissorsButton = document.querySelector(".csissors")
const displayScore= document.querySelector(".displayscore")
const scoreValueElement = document.getElementById("scoreValue");
rockButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playerSelection='rock'
  playRound(playerSelection, computerSelection);
  
});
paperButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playerSelection='paper'
  playRound(playerSelection, computerSelection);
  
});
sissorsButton.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  playerSelection='scissors'
  playRound(playerSelection, computerSelection);
});