'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//function for printing message
const message = function (message) {
  document.querySelector('.message').textContent = message;
};

//adding events for CHECK button
document.querySelector('.check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);
  console.log(number, typeof number);

  //if no value is entered
  if (!number) {
    message('⛔There is No data');
  }

  //if the Number is correct
  else if (number === secretNumber) {
    message('👏🤩 Correct Answer');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //if the Number is incorrect
  else if (number !== secretNumber) {
    if (score > 1) {
      message('🤦‍♂️👻 Wrong Number');
      score--;
      document.querySelector('.score').textContent = score;
      //two possibilities here one is higher than secretNumber else lower than secreNumber
      if (number > secretNumber) {
        message('too High👆🏻👆🏻');
      } else {
        message('too Low 👇🏻👇🏻');
      }
    } else {
      message('😭😭You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//adding events for AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  //styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
