// arrays dont have any length or specific position checks
// const user: (string | number)[] = [1, "John"];

// tuples
// tuple restricts by order
let user: [string, number, boolean];
user = ["", 4, false];
// user.sort();
// tuple also restricts by length
let rgb: [number, number, number] = [255, 255, 255];
// error
// rgb = [144, 5, 51, 55];

// store tuple in a type
type User = [number, string];

const newUser: User = [112, ""];
// error - cannot change number to
// newUser[0] = "";

// seems like this should give error but doesn't
newUser.push(1);

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
