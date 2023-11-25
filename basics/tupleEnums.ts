// arrays dont have any length or specific position checks
// const user: (string | number)[] = [1, "John"];

// tuple restricts by order
let user: [string, number, boolean];
user = ["", 4, false];

// tuple also restricts by length
let rgb: [number, number, number] = [255, 255, 255];
// error
// rgb = [144, 5, 51, 55];

// store tuple in a type
type User = [number, string];

const newUser: User = [112, ""];
newUser[1] = "";

// error
newUser.push(1);

export {};
