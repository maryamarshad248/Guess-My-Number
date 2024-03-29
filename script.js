'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // implementing the game logic
  // when there is no input........
  if (!guess) {
    displayMessage('No number');
    // document.querySelector('.message').textContent = 'No number';

    // when player wins the game........
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    //document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  guess > secretNumber ? 'too high' : 'too low';
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// when guess is too high......
//} else if (guess > secretNumber) {
//  if (score > 1) {
//   document.querySelector('.message').textContent = 'Too high';
//    score--;
//   document.querySelector('.score').textContent = score;
//  } else {
//   document.querySelector('.message').textContent = 'You lost the game!';
//   document.querySelector('.score').textContent = 0;
//  }

// when guess is too low.......
// } else if (guess < secretNumber) {
//   if (score > 1) {
//    document.querySelector('.message').textContent = 'Too low';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else {
//   document.querySelector('.message').textContent = 'You lost the game!';
//   document.querySelector('.score').textContent = 0;
// }
// }
//});
// coding challange

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing';
  displayMessage('start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
