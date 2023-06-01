const startGameBtn = document.getElementById('start_game_btn');

// const start = function startGame(x, y) {
//   // console.log(` Value of x: ${x} and y:${y}`);
//   console.log('Game is starting ......');
// };
const start = function (x, y) {
  // anonymous function
  // console.log(` Value of x: ${x} and y:${y}`);
  console.log('Game is starting ......', age);
};

start(10, 15);

// console.log(`typeof start is ${typeof start}`);
// console.dir(start);

// global
// function startGame() {
//   console.log('Game is starting .....');
// }

const person = {
  name: 'rahatechnologies',
  greet: function () {
    // anonymous
    console.log('Hello there!');
  },
};

// greet(); // wrong
//name

// console.log(person.name);
person.greet(); // method => function attached to some object

// startGame(); // normal function direct call
// console.log(`typeof person is ${typeof person}`);
// console.log(startGame);
// console.dir(person);

// startGameBtn.addEventListener('click', start);
startGameBtn.addEventListener('click', function () {
  console.log('Game is starting .....', age);
});
