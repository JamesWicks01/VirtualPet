const minigame = {
  playerScore: 0,
  computerScore: 0,
  playerChoice: '',
  computerChoice: '',
};

function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];
  const choiceNumber = Math.floor(Math.random() * 3);
  minigame.computerChoice = computerChoices[choiceNumber];
  console.log(minigame.computerChoice);
  checkWinner();
}

function checkWinner() {
  const result = document.getElementById('result');
  const playerScoreBoard = document.getElementById('playerScoreBoard');
  const computerScoreBoard = document.getElementById('computerScoreBoard');
  if (minigame.playerChoice === minigame.computerChoice) {
    result.textContent = 'Tie';
  } else if (minigame.playerChoice === 'rock') {
    if (minigame.computerChoice === 'paper') {
      result.textContent = 'Your Pet Has Won';
      minigame.computerScore = minigame.computerScore + 1;
      computerScoreBoard.textContent = minigame.computerScore;
      gameOver();
    } else {
      result.textContent = 'Player Has Won';
      minigame.playerScore = minigame.playerScore + 1;
      playerScoreBoard.textContent = minigame.playerScore;
      gameOver();
    }
  } else if (minigame.playerChoice === 'paper') {
    if (minigame.computerChoice === 'scissors') {
      result.textContent = 'Your Pet Has Won';
      minigame.computerScore = minigame.computerScore + 1;
      computerScoreBoard.textContent = minigame.computerScore;
      gameOver();
    } else {
      result.textContent = 'Player Has Won';
      minigame.playerScore = minigame.playerScore + 1;
      playerScoreBoard.textContent = minigame.playerScore;
      gameOver();
    }
  } else if (minigame.playerChoice === 'scissors') {
    if (minigame.computerChoice === 'rock') {
      result.textContent = 'Your Pet Has Won';
      minigame.computerScore = minigame.computerScore + 1;
      computerScoreBoard.textContent = minigame.computerScore;
      gameOver();
    } else {
      result.textContent = 'Player Has Won';
      minigame.playerScore = minigame.playerScore + 1;
      playerScoreBoard.textContent = minigame.playerScore;
      gameOver();
    }
  } else {
    result.textContent = 'An Error Was Encountered';
  }
}

function gameOver() {
  const result = document.getElementById('result');
  if (minigame.playerScore === 10) {
    result.textContent = 'You Won The Game.';
    minigame.computerScore = 0;
    minigame.playerScore = 0;
    console.log('You Won The Game');
  } else if (minigame.computerScore === 10) {
    result.textContent = 'You Lost The Game';
    minigame.computerScore = 0;
    minigame.playerScore = 0;
    console.log('You Lost The Game');
  }
}

function init() {
  const rockBtn = document.querySelector('#rock');
  rockBtn.addEventListener('click', () => {
    minigame.playerChoice = 'rock';
    console.log('rock');
    getComputerChoice();
  });
  const paperBtn = document.querySelector('#paper');
  paperBtn.addEventListener('click', () => {
    minigame.playerChoice = 'paper';
    getComputerChoice();
  });
  const scissorsBtn = document.querySelector('#scissors');
  scissorsBtn.addEventListener('click', () => {
    minigame.playerChoice = 'scissors';
    getComputerChoice();
  });
  const exitBtn = document.querySelector('#exit');
  exitBtn.addEventListener('click', () => {
    window.location = 'petscreen.html';
  });
}

window.addEventListener('load', init);
