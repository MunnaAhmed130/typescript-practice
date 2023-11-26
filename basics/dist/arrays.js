"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array type
const names = [];
names.push("Ash");
// type inference with array
const heros = ["thor", "spiderman", "ironman"];
let things = [1, true, "hello"];
// 2 ways of annotating array type
// const numbers: number[] = [];
const numbers = [];
numbers.push(2);
// types of array of objects
const allUsers = [];
allUsers.push({ name: "", isActive: false });
// complex array structure
const MLModels = [
    [255, 255, 255],
    [255, 255, 255],
];
