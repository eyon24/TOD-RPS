const myButton = document.getElementById("myButton");
const humanScoreCounter = document.getElementById("humanScore");
const computerScoreCounter = document.getElementById("computerScore");
const result = document.getElementById("result");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const rng = Math.random();
  if (rng < 0.3) {
    return "rock";
  } else if (rng >= 0.3 && rng < 0.6) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = () => {
  return window.prompt("Please enter rock, paper, or scissors.").toLowerCase();
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("It's a tie");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    console.log("You Win");
  } else {
    computerScore++;
    console.log("You Lose");
  }
  console.log(humanChoice, computerChoice);
};

const playGame = () => {
  while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log("current score " + humanScore + " : " + computerScore);
    humanScoreCounter.textContent = "Human Score: " + humanScore;
    computerScoreCounter.textContent = "Computer Score: " + computerScore;
  }
  if (humanScore === 5) {
    result.textContent = "You Win!";
  } else {
    result.textContent = "You Lose!";
  }
};

myButton.addEventListener("click", playGame);
