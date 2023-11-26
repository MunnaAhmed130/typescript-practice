"use strict";
// explicit return type
function addTwo(num) {
    return num + 2;
    // return "hello";
}
let value = addTwo(5);
// value = "hello"
// type inference with function return type
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// default parameter
let loginUser = (name, email, isPaid = false) => { };
// addTwo(5);
// getUpper("Hello");
// signUpUser("Adam", "", false);
// loginUser("Adam", "email");
// union return type - string & boolean are union member's
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
// array function type
const getHello = (s) => {
    return "";
};
// type inference with array
const heros = ["thor", "spiderman", "ironman"];
// template literals are changed while compiling to .js file
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// greet("Maddison", new Date());
greet("Maddison", new Date());
heros.map((hero) => {
    return `${hero} is a hero`;
});
// return type void doesn't return anything
function consoleError(errmsg) {
    console.log(errmsg);
}
// return type never doesn't return and throws an exception
function handleError(errmsg) {
    throw new Error(errmsg);
}
// console.log(4/[])
// export {};
