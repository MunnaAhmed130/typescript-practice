"use strict";
// arrays dont have any length or specific position checks
// const user: (string | number)[] = [1, "John"];
Object.defineProperty(exports, "__esModule", { value: true });
// tuples
// tuple restricts by order
let user;
user = ["", 4, false];
user.sort();
// console.log(user);
// tuple also restricts by length
let rgb = [255, 255, 255];
// restricts by length & order
let hsla;
hsla = [255, "55%", "70%", 255];
// error
// rgb = [144, 5, 51, 55];
// function returns tuple
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const newUser = [112, ""];
// error - cannot change number to
// newUser[0] = "";
// seems like this should give error but doesn't
newUser.push(1);
// named tuples adds more context
let userInfo;
userInfo = ["peach", 27];
