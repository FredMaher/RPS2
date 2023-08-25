// This is the "external" .js file that contains the logic of the game 
// and is pointed to by/from the RPS2.html file.

// User chooses Rock Paper or Scissors by clicking on one of 
// three possible buttons. Then the choice is displayed in a box
// The "user choice display" box

// RPS2.js
const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissors = document.getElementById("buttonScissors");
const textDisplay = document.getElementById("textDisplay");

let userWins = 0;
let computerWins = 0;

function computerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userChoice) {
  const computerChoiceValue = computerChoice();
  textDisplay.textContent = `User chose: ${userChoice}\nComputer chose: ${computerChoiceValue}`;

  if (userChoice === computerChoiceValue) {
    textDisplay.textContent += "\nIt's a tie!";
  } else if (
    (userChoice === "ROCK" && computerChoiceValue === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoiceValue === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoiceValue === "PAPER")
  ) {
    textDisplay.textContent += "\nYou win!";
    userWins++;
  } else {
    textDisplay.textContent += "\nComputer wins!";
    computerWins++;
  }

  textDisplay.textContent += `\nUser wins: ${userWins} - Computer wins: ${computerWins}`;

  if (userWins >= 3) {
    textDisplay.textContent += "\nYou win the game!";
  } else if (computerWins >= 3) {
    textDisplay.textContent += "\nComputer wins the game!";
  }
}

buttonRock.addEventListener("click", () => {
  playRound("ROCK");
});

buttonPaper.addEventListener("click", () => {
  playRound("PAPER");
});

buttonScissors.addEventListener("click", () => {
  playRound("SCISSORS");
});

const playAgainButton = document.getElementById("playAgain");
const gameResultText = document.getElementById("gameResult");

playAgainButton.addEventListener("click", () => {
  userWins = 0;
  computerWins = 0;
  gameResultText.textContent = "";
  textDisplay.textContent = "";
});



