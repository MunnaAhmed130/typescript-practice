"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// array type
var names = [];
names.push("Ash");
// 2 ways of annotating array type
// const numbers: number[] = [];
var numbers = [];
numbers.push(2);
// types of array of objects
var allUsers = [];
allUsers.push({ name: "", isActive: false });
// complex array structure
var MLModels = [
    [255, 255, 255],
    [255, 255, 255],
];
