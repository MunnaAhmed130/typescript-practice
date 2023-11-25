"use strict";
// arrays dont have any length or specific position checks
// const user: (string | number)[] = [1, "John"];
Object.defineProperty(exports, "__esModule", { value: true });
// tuple restricts by order
var user;
user = ["", 4, false];
// tuple also restricts by length
var rgb = [255, 255, 255];
var newUser = [112, ""];
newUser[1] = "";
// error
newUser.push(1);
