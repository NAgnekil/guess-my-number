'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const messageSelector = document.querySelector('.message');
const numberSelector = document.querySelector('.number');
const scoreSelector = document.querySelector('.score');
let totalScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  messageSelector.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    numberSelector.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberSelector.style.width = '30rem';
    if (totalScore > highScore) {
      highScore = totalScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (totalScore > 1) {
      displayMessage(guess < secretNumber ? 'Guess too low' : 'Guess too high');
      totalScore = totalScore - 1;
      //score--
      scoreSelector.textContent = totalScore;
    } else {
      displayMessage('You lost the game');
      scoreSelector.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  totalScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreSelector.textContent = totalScore;
  numberSelector.textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000';
  numberSelector.style.width = '15rem';
});
