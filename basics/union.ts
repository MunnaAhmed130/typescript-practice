// union with primitive
let score: number | string = 33;
score = 44;
score = "55";

type User = {
    name: string;
    id: number;
};

type Admin = {
    name: string;
    id: number;
    role: string;
};

// union with type aliases
let newUser: User | Admin = { name: "Joe", id: 452 };
newUser = { name: "Joe", id: 452, role: "" };

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();
    } else {
        console.log(id + 3);
    }
    console.log(`${id}`);
}

getDbId(2);
getDbId("2");

// array
const data: number[] = [1, 2, 3];
const data1: string[] = ["adam"];
// array union
const data2: (string | number)[] = ["adam", 2, 3];

// literal type
let pi: 3.14 = 3.14;

// error
// pi = 3.145

// literal type
let seatAllotment: "aisle" | "middle" | "window" = "middle";

// error
// seatAllotment = "crew";

export {};
