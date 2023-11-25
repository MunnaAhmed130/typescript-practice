// wrong syntax
// function createUser({ name: string, isPaid: boolean }) {
//     console.log(name);
// }

// object parameter type
function createUser(obj: { name: string; isPaid: boolean }) {
    console.log(obj.name);
}

let newUser = { name: "string", isPaid: false, email: "@gmail.com" };

// this gives error
// createUser({ name: "string", isPaid: false, email: "@gmail.com" });

// this dosn't give error
createUser(newUser);

// return type object
function createCourse(): { name: string; price: number } {
    return { name: "reactJs", price: 399 };
}

createCourse();

export {};
