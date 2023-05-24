function select(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    const result = playRound(userChoice, computerChoice);
    displayResult(result);
  }
  
  function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
  }
  
  function play() {
    const buttons = document.querySelectorAll('.selection button');
    buttons.forEach(function (button) {
      button.disabled = true;
    });
  
    const playButton = document.getElementById('play-button');
    playButton.disabled = true;
  
    setTimeout(function () {
      buttons.forEach(function (button) {
        button.disabled = false;
      });
  
      playButton.disabled = false;
      displayResult('');
    }, 1500);
  }
      