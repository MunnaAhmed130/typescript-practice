"use strict";
// wrong syntax
// function createUser({ name: string, isPaid: boolean }) {
//     console.log(name);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// object parameter type
function createUser(obj) {
    console.log(obj.name);
}
let newUser = { name: "string", isPaid: false, email: "@gmail.com" };
// this gives error
// createUser({ name: "string", isPaid: false, email: "@gmail.com" });
// this dosn't give error
createUser(newUser);
// return type object
function createCourse() {
    return { name: "reactJs", price: 399 };
}
createCourse();
