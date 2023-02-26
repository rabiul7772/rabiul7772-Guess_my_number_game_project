'use strict';

// ------Project 1 Guess the number--------

let secretNumber = Math.trunc(Math.random() * 20) + 1; // we should define secret number outside of the event because it should be define once while starting the site and it will be changed after every reload the browser. if we could define secret number into the event after every click the number would get changed that's doesn't make sense!
let score = 20; // here score is a state variable. this variable is part of so called application state
let highScore = 0;
// we can use function for repetitive line code to refractor the code considering DRY principle, wherever the following function would be needed we will call
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No number!';
    displayMessage('⛔ No number!');
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number! ';
    displayMessage('🎉 Correct Number! ');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = ' #60b347'; // body will be colored

    document.querySelector('.number').style.width = '30rem'; // width will be increased

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high !' : ' 📉 Too low !';
      // ternary operator is an expression that's provide value
      displayMessage(guess > secretNumber ? '📈 Too high !' : ' 📉 Too low !');

      score--; // after every wrong number score will be reduce and printed
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game ';

      displayMessage('💥 You lost the game ');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// for reset the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
