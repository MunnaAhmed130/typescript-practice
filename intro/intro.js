"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = { name: "Adam", age: "20" };
console.log(user);
// types by inference
// string
let greetings = "Hello World";
greetings.toLowerCase();
console.log(greetings);
// number
let userId = 334455.5;
// userId.
// boolean
let isLoggedIn = true;
console.log(isLoggedIn.valueOf());
let value;
function something() {
    return "Hello";
}
value = something();
console.log(value);
value = 5;
console.log(value);
