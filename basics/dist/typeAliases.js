"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
console.log(getRandomColor());
console.log(getRandomColor());
// type alias as type
let myUser = {
    _id: "12345",
    name: "Adam",
    email: "ad@yahoo.com",
    isActive: false,
};
myUser.name = "Ed";
// cannot assign _id as it is read only
// myUser._id = ""
// object
const user = {
    name: "David",
    email: "david@gmail.com",
    isActive: true,
};
function createUser(user) {
    return user;
}
console.log(createUser(user));
