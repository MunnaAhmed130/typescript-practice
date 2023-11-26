"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
}
function provideId(id) {
    // check for null
    if (!id) {
        console.log("provide id");
        return;
    }
    console.log(id);
}
provideId("o");
function printAll(strs) {
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
function print(strs) {
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
        }
        else if (typeof strs === "string") {
            console.log(typeof strs);
        }
    }
}
print(""); // prints nothing not empty string
printAll(""); // prints type for empty string
function multiplyAll(values, factor) {
    // type guard for undefined
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => x * factor);
    }
}
console.log(multiplyAll([5], 5));
