// Enums
// this enum produces IIFE
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
}

// this produces clean & easy to read code
const enum SeatChoices {
    AISLE,
    MIDDLE,
    WINDOW,
}

const hcSeat = SeatChoice.MIDDLE;
const hcSeat1 = SeatChoices.MIDDLE;

export {};
