// array type
const names: string[] = [];

names.push("Ash");

// 2 ways of annotating array type
// const numbers: number[] = [];
const numbers: Array<number> = [];
numbers.push(2);

type User = {
    name: string;
    isActive: boolean;
};

// types of array of objects
const allUsers: User[] = [];

allUsers.push({ name: "", isActive: false });

// complex array structure
const MLModels: number[][] = [
    [255, 255, 255],
    [255, 255, 255],
];

export {};
