function addTwo(num: number): number {
    return num + 2;
    // return "hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}
// default parameter
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let value = addTwo(5);
// value = "hello"
// addTwo(5);
// getUpper("Hello");
// signUpUser("Adam", "", false);
// loginUser("Adam", "email");

function getValue(myVal: number): string | boolean {
    // if (myVal > 5) {
    //     return true;
    // }
    // return "200 OK";
    return false;
}

const getHello = (s: string): string => {
    return "";
};
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

// const heros = [1, "spiderman", "ironman"];
const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
    return `${hero} is a hero`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string) {
    console.log(errmsg);
}
// console.log(4/[])
export {};
