// class
class User {
    // private, public keywords are access modifiers
    // every propery is automatically public
    public email: string;
    // private properties not accessible to the instances of a class
    private name: string; // private in ts
    private city: string = ""; // private in js

    // city: string = "";
    readonly user: string = "user";
    constructor(email: string, name: string) {
        // types for this.property will be declared outside of constructor
        this.email = email;
        this.name = name;
    }
}

// better way
class NewUser {
    // parent class's variables or methods with private keyword is not accessible to child class
    // private _courseCount: number = 1;
    // only parent & child classes can use protected variables & methods
    protected _courseCount: number = 1;
    readonly user: string = "user";
    constructor(
        public email: string,
        private name: string // private userId: string
    ) {}
    // private method
    private deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail(): string {
        return `{this.email}`;
    }
    get courseCount(): number {
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

class SubUser extends NewUser {
    // parent class's variables or methods with private keyword is not accessible to child class

    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
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
