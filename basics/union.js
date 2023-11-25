"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union with primitive
var score = 33;
score = 44;
score = "55";
// union with type aliases
var newUser = { name: "Joe", id: 452 };
newUser = { name: "Joe", id: 452, role: "" };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        console.log(id + 3);
    }
    console.log("".concat(id));
}
getDbId(2);
getDbId("2");
// array
var data = [1, 2, 3];
var data1 = ["adam"];
// array union
var data2 = ["adam", 2, 3];
// literal type
var pi = 3.14;
// error
// pi = 3.145
// literal type
var seatAllotment = "middle";
