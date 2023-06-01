const startGameBtn = document.getElementById('start_game_btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const PLAYER_WINS = 'WINS';
const PLAYER_LOST = 'LOST';

let isGameRunning = false;
// function expression
const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  // User input validation
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    // negative case
    // alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you!`);
    alert(`Invalid Choice! `);
    // return DEFAULT_USER_CHOICE;
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = (cChoice, pChoice) => {
//   pChoice = pChoice === undefined ? DEFAULT_USER_CHOICE : pChoice;

//   return cChoice === pChoice
//     ? RESULT_DRAW
//     : (cChoice === ROCK && pChoice === PAPER) ||
//       (cChoice === PAPER && pChoice === SCISSORS) ||
//       (cChoice === SCISSORS && pChoice === ROCK)
//     ? PLAYER_WINS
//     : PLAYER_LOST;
// };

// const getWinner =
// (
//   cChoice,
//   pChoice = cChoice === ROCK ? PAPER : DEFAULT_USER_CHOICE
// ) =>

// const getWinner  = (cChoice, pChoice = cChoice) =>

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? PLAYER_WINS
    : PLAYER_LOST;

// if (cChoice === pChoice) {
//   return RESULT_DRAW;
// } else if (
//   // || logical or
//   // && logical and
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return PLAYER_WINS;
// } else {
//   return PLAYER_LOST;
// }
// };

// Callback function =>
// function A() as a argument passed inside another function B(). Function A() invoked based on any event occured by browser

//  Function A() => callback Function

startGameBtn.addEventListener('click', () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Game is starting .....');
  const playerChoice = getPlayerChoice(); // undefined
  const computerChoice = getComputerChoice();

  let winner;
  // undefined
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    // undefined
    winner = getWinner(computerChoice); // (computerChoice, undefined)
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you had`;
  console.log(winner);
  if (winner === RESULT_DRAW) {
    message = message + ` match draw`;
  } else if (winner === PLAYER_WINS) {
    message = message + ` won`;
  } else {
    message = message + ` lost`;
  }
  alert(message);
  isGameRunning = false;
});

// not related to Game

// approach1
// const sumUp = (a, b, c, d) => {
//   let sum = 0;
//   sum = a + b + c + d;
//   return sum;
// };

// approach2
// use array
// const sumUp = (numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };

// approach3
// Rest Operator is array like object

// Outer function sumUp
// const sumUp = (...numbers) => {
//   //inner function validateNumber
//   const validateNumber = (number) => (isNaN(number) ? 0 : number);
//   let sum = 0;
//   console.log(`numbers : ${numbers}`);
//   for (const num of numbers) {
//     sum += validateNumber(num);
//     // sum += num;
//   }
//   return sum;
// };

// approach 4
// Before ES6 EcmaScript Standard 6th version
// const sumUp = function () {
//   // no arguments
//   let sum = 0;
//   console.log(`arguments : ${arguments}`);
//   for (const num of arguments) {
//     // arguments magic parameter
//     // Very bad Don't use
//     sum += num;
//   }
//   return sum;
// };

// console.log(`After addition : ${sumUp(1, 5, 10, 7)}`);
// console.log(`After addition : ${sumUp([1, 5, 10, 7, -3, 10])}`); // approach2
// console.log(`After addition : ${sumUp(1, 5, 10, 7, -3, 10)}`);
// console.log(`After addition : ${sumUp(1, 5, 10, 7, -3, 10, 8, 7, 6)}`);
// console.log(
//   `After addition : ${sumUp(1, 5, 10, 7, -3, 10, 8, 7, 6, 76, 'fdsssa', 56)}`
// );
// console.log(
//   `After addition : ${sumUp(1, 5, 10, 7, -3, 10, 8, 7, 6, 76, 'fdsssa123', 56)}`
// );
// console.log(`After addition : ${sumUp(1, 5, 10, 7, 5)}`);

// const validateNumber = (number) =>
//   console.log(`isNaN(number) = ${isNaN(number)}`);

// validateNumber('fdsssa123');

// Custom callback function

//  callback function => resultHandler

const validateNumber = (number) => (isNaN(number) ? 0 : number);

const combine = (resultHandler, operation, ...numbers) => {
  // let message = '';
  let result = 0;

  for (const num of numbers) {
    if (operation === 'add') {
      result += validateNumber(num);
      // message = 'The Result after adding all numbers is :';
    } else if (operation === 'subtract') {
      result -= validateNumber(num);
      // message = 'The Result after subtracting all numbers is :';
    }
  }
  resultHandler(result);
};

// const subtractUp = (resultHandler, operation, ...numbers) => {
//   let subtractValue = 0;
//   for (const num of numbers) {
//     subtractValue -= validateNumber(num);
//   }

//   resultHandler(subtractValue);
// };

// Approach 1
// const showResultSumUp = (result) => {
//   console.log(`The Result after adding all numbers is : ${result}`); //output
// };

// const showResultSubtract = (result) => {
//   console.log(`The Result after subtracting all numbers is : ${result}`); //output
// };

// approach 3
const showResult = (message, result) => {
  console.log(message + ' ' + result); //output
};
combine(
  showResult.bind(this, 'The Result after adding all numbers is :'),
  'add',
  1,
  5,
  'fdsssa123',
  56,
  2,
  1
);

combine(
  showResult.bind(this, 'The Result after subtracting all numbers is'),
  'subtract',
  1,
  10,
  15,
  20
);
