// explicit return type
function addTwo(num: number): number {
    return num + 2;
    // return "hello";
}

let value = addTwo(5);
// value = "hello"
// console.log(value);

// type inference with function return type
function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

// arrow function & default parameter
let loginUser = (
    name: string,
    email: string,
    isPaid: boolean = false
): void => {};

// addTwo(5);
// getUpper("Hello");
// signUpUser("Adam", "", false);
// loginUser("Adam", "email");

// union return type - string & boolean are union member's
function getValue(myVal: number): string | boolean {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

// array function type
const getHello = (s: string): string => {
    return "";
};

// template literals are changed while compiling to .js file
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// greet("Maddison", new Date());
greet("Maddison", new Date());

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

// return type void doesn't return anything
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// return type never doesn't return and throws an exception
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

// console.log(4/[])
// export {};
