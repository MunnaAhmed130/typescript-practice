"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// default parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var value = addTwo(5);
// value = "hello"
addTwo(5);
getUpper("Hello");
signUpUser("Adam", "", false);
loginUser("Adam", "email");
function getValue(myVal) {
    // if (myVal > 5) {
    //     return true;
    // }
    // return "200 OK";
    return false;
}
var getHello = function (s) {
    return "";
};
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
// const heros = [1, "spiderman", "ironman"];
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "".concat(hero, " is a hero");
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    console.log(errmsg);
}
