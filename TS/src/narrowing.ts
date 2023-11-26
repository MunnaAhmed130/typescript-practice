function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
}

function provideId(id: null | string) {
    // check for null
    if (!id) {
        console.log("provide id");
        return;
    }
    console.log(id);
}

provideId("o");

function printAll(strs: string | string[] | null) {
    // this checks for not null & is string[]
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    // this checks for string
    else if (typeof strs === "string") {
        console.log(typeof strs);
    }
}

function print(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!

    // this checks for truthy value which is false for empty string so it will not catch empty string
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(typeof strs);
        }
    }
}

print(""); // prints nothing not empty string
printAll(""); // prints type for empty string

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    // type guard for undefined
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

console.log(multiplyAll([5], 5));

interface LiteUser {
    name: string;
    email: string;
}

interface LiteAdmin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: LiteUser | LiteAdmin) {
    if ("isAdmin" in account) {
        // console.log(account.isAdmin);
        return account.isAdmin;
    }
}

const david: LiteAdmin = {
    name: "david",
    email: "email@david.com",
    isAdmin: true,
};

isAdminAccount(david);

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void };
type Bird = {
    fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    } else {
        pet;
        return "bird food";
    }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sides: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

// discriminated unions
type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.sides * shape.sides;
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sides * shape.sides;

        case "rectangle":
            return;
        // exhaustiveness checking
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}
