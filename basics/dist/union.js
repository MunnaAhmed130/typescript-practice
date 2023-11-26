"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// union with primitive
let score = 33;
score = 44;
score = "55";
// union with type aliases
let newUser = { name: "Joe", id: 452 };
newUser = { name: "Joe", id: 452, role: "" };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        console.log(id + 3);
    }
    console.log(`${id}`);
}
getDbId(2);
getDbId("2");
// array
const data = [1, 2, 3];
const data1 = ["adam"];
// array union
const data2 = ["adam", 2, 3];
// literal type
let pi = 3.14;
// error
// pi = 3.145
// literal type
let seatAllotment = "middle";
