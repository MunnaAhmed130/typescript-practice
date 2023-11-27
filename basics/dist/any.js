"use strict";
// any type
// explicit
let age;
age = 30;
age = false;
// implicit
let title;
// any in arrays
let things = ["hello", true, 30, null];
let thing = ["hello", true, 30, null, ["hello"], { name: "adam" }];
// functions & any
function addTogether(value) {
    return value * 2;
}
const a = addTogether(5); // 10
const b = addTogether("hello"); // NaN
console.log(a, b);
// useful when migrating from js to ts
