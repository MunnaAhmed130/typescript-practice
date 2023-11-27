// arrays dont have any length or specific position checks
// const user: (string | number)[] = [1, "John"];

// tuples
// tuple restricts by order
let user: [string, number, boolean];
user = ["", 4, false];
user.sort();
// console.log(user);

// tuple also restricts by length
let rgb: [number, number, number] = [255, 255, 255];

// restricts by length & order
let hsla: [number, string, string, number];
hsla = [255, "55%", "70%", 255];
// error
// rgb = [144, 5, 51, 55];

// function returns tuple
function useCoords(): [number, number] {
    const lat = 100;
    const long = 50;
    return [lat, long];
}

// store tuple in a type
type User = [number, string];

const newUser: User = [112, ""];
// error - cannot change number to
// newUser[0] = "";

// seems like this should give error but doesn't
newUser.push(1);

// named tuples adds more context
let userInfo: [name: string, age: number];

userInfo = ["peach", 27];

export {};
