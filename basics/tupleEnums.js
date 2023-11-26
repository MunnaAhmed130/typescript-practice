"use strict";
// arrays dont have any length or specific position checks
// const user: (string | number)[] = [1, "John"];
Object.defineProperty(exports, "__esModule", { value: true });
// tuples
// tuple restricts by order
var user;
user = ["", 4, false];
// user.sort();
// tuple also restricts by length
var rgb = [255, 255, 255];
var newUser = [112, ""];
// error - cannot change number to
// newUser[0] = "";
// seems like this should give error but doesn't
newUser.push(1);
// Enums
// this enum produces IIFE
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.MIDDLE;
var hcSeat1 = 1 /* SeatChoices.MIDDLE */;
