let randInt;
let pocket;
let totalPrize = 0;
let continueGame;
let playAgain;
const addRange = 0.5;

const range1 = 8;
const rangeBigger = 4;
const range2 = range1 + rangeBigger;
const minRange = 0;
let maxRange = range1;

const possiblePrize1 = 100;
const prizeBigger = 2;
const possiblePrize2 = possiblePrize1 * prizeBigger;
let possiblePrize = possiblePrize1;
const prizeDivider = 2;

const maxAttempts = 3;
let attempts = maxAttempts;

const game = confirm('Do you want to play a game?');

if (!game) {
  alert('You did not become a billionaire, but can.')
} else {
  do { // while playAgain = true the user repeats the range over and over again 0...8, 0...12, 0...8, 0...12,...
    outer: do { // while continueGame = true the user goes from a range of 0...8 to 0...12
      randInt = minRange - addRange + Math.random() * (maxRange - minRange + 1);
      randInt = Math.round(randInt);

      for (let i = 0; i < maxAttempts; i++) {
        pocket = +prompt(`Choose a roulette pocket number from 0 to ${maxRange}
Attempts left: ${attempts}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$`);

        if (pocket !== randInt) {
          possiblePrize = possiblePrize / prizeDivider;
          attempts -= 1;
          if (attempts === 0) {
            totalPrize = 0;
            break outer;
          }
          continue;
        } else {
          totalPrize += possiblePrize;
          if (maxRange === range1) {
            continueGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
          } else {
            break outer;
          }

          if (!continueGame) {
            break outer;
          } else {
            maxRange = range2;
            possiblePrize = possiblePrize2;
            attempts = maxAttempts;
            break;
          }
        }
      }
    } while (continueGame);

    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
    playAgain = confirm('Do you want to play again?');

    maxRange = range1;
    totalPrize = 0;
    possiblePrize = possiblePrize1;
    attempts = maxAttempts;

  } while (playAgain);
}
