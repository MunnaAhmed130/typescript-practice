"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "Adam", age: "20" };
console.log(user);
// types by inference
// string
var greetings = "Hello World";
greetings.toLowerCase();
console.log(greetings);
// number
var userId = 334455.5;
// userId.
// boolean
var isLoggedIn = true;
console.log(isLoggedIn.valueOf());
var value;
function something() {
    return "Hello";
}
value = something();
console.log(value);
value = 5;
console.log(value);
