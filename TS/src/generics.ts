// const strings: string[] = [""];
const strings: Array<string> = [""];
// const numbers: number[] = [4];
const numbers1: Array<number> = [4];
// const mix: (string | number)[] = [4, ""];

function identity1(val: boolean | number): boolean | number {
    return val;
}

function identity2(val: any): any {
    return val;
}

// generics
function identity3<Type>(val: Type): Type {
    return val;
}

function identity4<T>(val: T): T {
    return val;
}

// identity3(true);
interface Bottle {
    brand: string;
    type: number;
}

identity4<Bottle>({ brand: "cola", type: 2 });

// Array<Type> & Type[] are the same
// function declaration with generics
function getSearchProducts<T>(products: T[]): T {
    return products[1];
}

console.log(getSearchProducts([[1], [2], [3]]));

// arrow function with generics
//comma is to remind that it is not a jsx component
// <T,> is equal to <T> which is a syntactical sugar
const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[1];
};

interface Database {
    connection: string;
    username: string;
    password: string;
}

function property<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2,
    };
}

// property(2, 1);
property(2, { connection: "", username: "", password: "" });

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class sellable<T> {
    public cart: T[] = [];
    addToCart(product: T) {
        this.cart.push(product);
    }
}
