// object type inference
let user = { name: "string", isPaid: false, email: "@gmail.com" };

// error
// user.email = 1

// object explicit type
let newUser: { name: string; age: number; id: number } = {
    name: "Adam",
    age: 40,
    id: 1,
};

export {};
