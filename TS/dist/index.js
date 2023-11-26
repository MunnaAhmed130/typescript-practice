"use strict";
// class
class User {
    constructor(email, name) {
        this.city = ""; // private in js
        // city: string = "";
        this.user = "user";
        // types for this.property will be declared outside of constructor
        this.email = email;
        this.name = name;
    }
}
// better way
class NewUser {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.user = "user";
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `{this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // there should be no return type for setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const adam = new User("email", "adam");
const adam1 = new NewUser("email", "adam1");
// error
// const user1 = new User("email", 1);
// adam.city
// adam.user = "admin";
// adam1.deleteToken() // this is only accessible within the Class
console.log(adam, adam1);
