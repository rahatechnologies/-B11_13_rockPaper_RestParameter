// Function declaration
// function getWinner (cChoice, pChoice) {
// function body
// return var;
// }

// Function expression
// const getWinner = function (cChoice, pChoice) {
// function body
// return var;
// }

// normal function
function add(a, b) {
  return a + b; // explicit return
}

// Function expression
const add1 = function (a, b) {
  return a + b; // explicit return
};

//  Arrow function
const add2 = (a, b) => a + b; // implicit return for one statement in function body

const add3 = (a, b) => {
  console.log(` a: ${a} and b: ${b}`);
  return a + b; // explicit return for multiple statement in function body
};

add3(2, 5); // invoke

const add4 = () => {
  // no argument arrow function
  console.log(` a: ${a} and b: ${b}`);
  return a + b; // explicit return for multiple statement in function body
};

add4();

const add5 = (x) => {
  // no argument arrow function
  console.log(` a: ${a} and b: ${b}`);
  return a + b; // explicit return for multiple statement in function body
};

// function return object
// {
// name: pName;
// }

function loadPerson(pName) {
  return { name: pName };
}

const loadPerson = (pName) => ({
  name: pName,
  address: Kolkata,
});
