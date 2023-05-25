const choices = document.querySelectorAll('.choices button');
const result = document.getElementById('result');
const computer = document.getElementById('computer-score');
const player = document.getElementById('player-score');
const playeroption = document.getElementById('player-option');
const computeroption = document.getElementById('computer-option');

var playerChoiceElement = document.getElementById("player-choice");
var ComputerChoiceElement = document.getElementById("computer-choice");

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', playGame);
});

function playGame(e) {
  const playerChoice = e.target.id;
  playerChoiceElement.src=`./assets/images/${playerChoice}.jpg`;
  const computerChoice = getComputerChoice();
  ComputerChoiceElement.src= `./assets/images/${computerChoice}.jpg`
  const winner = getWinner(playerChoice, computerChoice);

  showResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

function showResult(playerChoice, computerChoice, winner) {
    computer.innerHTML = computerScore;
    player.innerHTML = playerScore;
    playeroption.innerHTML = `Player Chose : ${playerChoice}`;
    computeroption.innerHTML = `Computer Chose : ${computerChoice}`;

    result.innerHTML = `
   
    <p>${winner}</p>
  `;
}