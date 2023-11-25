"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type alias as type
var myUser = {
    _id: "12345",
    name: "Adam",
    email: "ad@yahoo.com",
    isActive: false,
};
myUser.name = "Ed";
// cannot assign _id as it is read only
// myUser._id = ""
// object
var user = {
    name: "David",
    email: "david@gmail.com",
    isActive: true,
};
function createUser(user) {
    return user;
}
console.log(createUser(user));
