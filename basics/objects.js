"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "David",
    email: "david@gmail.com",
    isActive: true,
};
// function createUser({ name: string, isPaid: boolean }) {
//     console.log(name);
// }
function createUser(obj) {
    console.log(obj.name);
}
var newUser = { name: "string", isPaid: false, email: "@gmail.com" };
// this gives error
// createUser({ name: "string", isPaid: false, email: "@gmail.com" });
// this dosn't give error
createUser(newUser);
function createCourse() {
    return { name: "reactJs", price: 399 };
}
createCourse();
