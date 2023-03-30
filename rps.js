let playerWins = 0;
let compWins = 0;
let logTextElm = document.getElementById("log-text");
let pWins = document.getElementById("player-wins");
let cWins = document.getElementById("computer-wins");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

function getComputerChoice() {
    const RPS = ["Rock", "Paper", "Scissors"];
    let randInt = Math.floor(Math.random() * (RPS.length));
    return RPS[randInt];
}
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}`;
    } else if ( 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerWins++;
        return `Player wins! ${playerSelection} beats ${computerSelection}`; 
    } else {
        compWins++;
        return `Player loses! ${computerSelection} beats ${playerSelection}`;
    }
}
updateWins = () => {
    pWins.innerText = playerWins;
    cWins.innerText = compWins;
}
playRock = () => {
    logTextElm.innerText = playRound("Rock");
    updateWins();
}
playPaper = () => {
    logTextElm.innerText = playRound("Paper");
    updateWins();
}
playScissors = () => {
    logTextElm.innerText = playRound("Scissors");
    updateWins();
}

rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);