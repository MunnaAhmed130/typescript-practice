// type alias
type User = {
    // readonly object property
    readonly _id?: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number;
};

// type alias as type
let myUser: User = {
    _id: "12345",
    name: "Adam",
    email: "ad@yahoo.com",
    isActive: false,
};

type cardNumber = {
    cardnumber: string;
};

type cardDate = {
    cardDate: string;
};

// new type based on previous types

// good way
type cardDetail = cardNumber & cardDate;

// hacky way
type cardDetails = cardNumber &
    cardDate & {
        cvv: number;
    };

myUser.name = "Ed";

// cannot assign _id as it is read only
// myUser._id = ""

// object
const user: User = {
    name: "David",
    email: "david@gmail.com",
    isActive: true,
};

function createUser(user: User): User {
    return user;
}

console.log(createUser(user));
export {};
