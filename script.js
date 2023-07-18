// Function to get a random choice for the computer
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase for case-insensitivity
  playerSelection = playerSelection.toLowerCase();

  // Validate playerSelection
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    return "Invalid selection. Please choose Rock, Paper, or Scissors.";
  }

  // Determine the outcome based on playerSelection and computerSelection
  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Function to play a 5 round game and keep score
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(
      "Enter your choice: Rock, Paper, or Scissors"
    );
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(`Round ${round}: ${result}`);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  console.log(
    `Game over! Final score: Player ${playerScore} - Computer ${computerScore}`
  );

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Oops! You lose the game.");
  } else {
    console.log("It's a tie! The game ended in a draw.");
  }
}

// Call the game function to start playing
game();
