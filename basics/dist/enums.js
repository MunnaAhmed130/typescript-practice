"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums
// this enum produces IIFE
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.MIDDLE;
const hcSeat1 = 1 /* SeatChoices.MIDDLE */;
