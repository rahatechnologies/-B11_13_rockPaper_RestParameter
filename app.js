var userName = 'rahatechnologies';
var userName = 'MERN stack';
// var hobbies = ['watching movies', 'Gardening']; // global scope

if (userName === 'MERN stack') {
  hobbies = ['Sports', 'Cooking']; //  block scope // shadowing variable
  //   let hobbies = ['Sports', 'Cooking']; // local scope
  console.log(hobbies);
}

console.log(`outside if block userName: ${userName} and hobbies: ${hobbies}`);

// let age = 10; // global scope
// function greet() {
//   var age = 5; // block / local scope / local to greet function
//   console.log(`from greet function userName: ${userName} and age: ${age}`);
// }
// console.log(`outside greet function userName: ${userName} and age: ${age}`);
// greet();
