// Follow along with the examples here
function sayHello() {
  console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
  console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
  console.log("Hello, Liz!");
}
sayHelloToLiz();

function sayHelloToSamip() {
  console.log("Hello, Samip!");
}
sayHelloToSamip();

function doSomething(thing, some, what, to, have) {
  console.log(thing, some, what, to, have);
}
doSomething("anything", 20, "+", 10, "the result"); // passing the argument 'anything' into our function

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");
say("Julio", "hello");

function add(x, y) {
  return x + y;
}
console.log(add(1, 2));

function say(greeting, firstName) {
  return (`${greeting}, ${firstName}!`);
}
console.log(say("Hello", "Liz"));