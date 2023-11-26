"use strict";
// const strings: string[] = [""];
const strings = [""];
// const numbers: number[] = [4];
const numbers1 = [4];
// const mix: (string | number)[] = [4, ""];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
// generics
function identity3(val) {
    return val;
}
function identity4(val) {
    return val;
}
identity4({ brand: "cola", type: 2 });
// Array<Type> & Type[] are the same
// function declaration with generics
function getSearchProducts(products) {
    return products[1];
}
console.log(getSearchProducts([[1], [2], [3]]));
// arrow function with generics
//comma is to remind that it is not a jsx component
// <T,> is equal to <T> which is a syntactical sugar
const getMoreSearchProducts = (products) => {
    return products[1];
};
function property(val1, val2) {
    return {
        val1,
        val2,
    };
}
// property(2, 1);
property(2, { connection: "", username: "", password: "" });
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
