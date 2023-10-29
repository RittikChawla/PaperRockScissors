//Save score while Refresh page

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  // console.log(JSON.parse(localStorage.getItem('score')));

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    console.log(computerMove);

    let result = '';

    if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.'
      }

    } else if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
    }

    if (result === 'You win.') {
      score.wins++;
    } else if (result === 'You lose.') {
      score.losses++;
    } else if (result === 'Tie.') {
      score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score))
    console.log(score);


alert(`${result} 
You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`)



    updateScoreElement();



  }

  function pickComputerMove() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    // console.log(randomNumber);


    let computerMove = '';


    if (randomNumber == 1) {
      computerMove = 'rock';
    } else if (randomNumber == 2) {
      computerMove = 'paper';
    } else if (randomNumber == 3) {
      computerMove = 'scissors';
    }

    return computerMove;

  }


  function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    alert(`Your Score is Reset`);
    console.log(score);
    localStorage.removeItem('score');

    updateScoreElement();


  }


  function updateScoreElement() {

    document.querySelector('.js-score').innerHTML = `
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
      `;

  }
