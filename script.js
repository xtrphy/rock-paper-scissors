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

function getHumanChoice() {
  const humanChoice = prompt('Rock, paper or scissors?').toLowerCase();
  if (['rock', 'paper', 'scissors'].includes(humanChoice)) {
    return humanChoice;
  } else {
    console.log('Invalid choice. Please try again.');
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Tie! Your score: ${humanScore}. Computer score: ${computerScore}`);
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'rock') {
    humanScore++;
    console.log(`Win! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}. Computer score: ${computerScore}`);
  } else if (humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    console.log(`Lose! ${computerChoice} beats ${humanChoice}! Your score: ${humanScore}. Computer score: ${computerScore}`);
  }
}

function playGame() {

  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`Congratulations! You win the game with a score of ${humanScore} to ${computerScore}.`);
  } else if (humanScore < computerScore) {
    console.log(`Game over! The computer wins with a score of ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`It's a tie! Both scored ${humanScore}.`);
  }
}

playGame();