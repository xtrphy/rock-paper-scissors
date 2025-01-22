const resultsEl = document.getElementById('results');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoice = Math.random();

  if (computerChoice < 1 / 3) {
    return 'rock';
  } else if (computerChoice < 2 / 3) {
    return 'paper';
  } else if (computerChoice < 1) {
    return 'scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultsEl.innerText = `Tie! Your score: ${humanScore}. Computer score: ${computerScore}`
  } else if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'rock'
  ) {
    humanScore++;
    resultsEl.innerText = `Win! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}. Computer score: ${computerScore}`
  } else if (
    humanChoice === 'rock' && computerChoice === 'paper' ||
    humanChoice === 'paper' && computerChoice === 'scissors' ||
    humanChoice === 'scissors' && computerChoice === 'rock'
  ) {
    computerScore++;
    resultsEl.innerText = `Lose! ${computerChoice} beats ${humanChoice}! Your score: ${humanScore}. Computer score: ${computerScore}`
  }
  updateScore();
}

function updateScore() {
  document.getElementById('playerScore').textContent = humanScore;
  document.getElementById('computerScore').textContent = computerScore;
  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    resultsEl.innerText = "Congratulations! You reached 5 points and won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultsEl.innerText = "Game over! The computer reached 5 points and won the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll('#buttons button').forEach(button => {
    button.disabled = true;
  });
}

document.getElementById('rock').addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});