'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;

let highScore = 10;
document.querySelector('.highscore').textContent=highScore;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener(
    'click', () => {
       const guess = Number(document.querySelector('.guess').value);
       if(!guess) {
           document.querySelector('.message').textContent = 'No number!';
       } else if(guess === secretNumber){
           document.querySelector('.message').textContent = 'Correct number';

           document.querySelector('body').style.backgroundColor = '#60b347';
           document.querySelector('.number').style.width = '30rem';
           if(highScore < score) {
               highScore=score;
               document.querySelector('.highscore').textContent=highScore;
           }
       } else if(guess > 20) {
           if(score > 1) {
               score--;
               document.querySelector('.score').textContent = score;
               document.querySelector('.message').textContent = 'Number is higher than 20';
           } else {
               score--;
               document.querySelector('.score').textContent = score;
               document.querySelector('.message').textContent = 'You lost the game!';
           }
       } else if(guess < 0) {
           score--;
           document.querySelector('.score').textContent = score;
           document.querySelector('.message').textContent = 'Too low';
       }else if(guess !== secretNumber) {
           score--;
           document.querySelector('.score').textContent = score;
           document.querySelector('.message').textContent = 'Wrong number';
       }
    }
)
document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'New Game';
    document.querySelector('.score').textContent = 20;
})



///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

