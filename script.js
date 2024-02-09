'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessingNubmer = Number(document.querySelector('.number-input').value);
  console.log(guessingNubmer, typeof guessingNubmer);

  if (!guessingNubmer) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
    // Победил игрок
  } else if (guessingNubmer === secretNumber) {
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('.guess-message').textContent = 'Ряльна крассавчик!';
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.test').textContent = 'ПРАВИЛЬНААА!!!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessingNubmer > secretNumber) {
    // слишком много
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Перебор!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guessingNubmer < secretNumber) {
    //слишком мало
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Недобрал!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Проиграл!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(205, 92, 92)';
      document.querySelector('.test').textContent = 'Ряльна не угадал это число?!';
      document.querySelector('.question').textContent = secretNumber 

    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.test').textContent = 'Угадай Число!';
  document.querySelector('.question').style.width = '20rem';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.guess-message').textContent = 'Начни угадывать';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number-input').value = '';
});

  

