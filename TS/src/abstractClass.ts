// abstract classes cannot create their own object
// they can be used to as a blueprint for child classes
abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}
    // compulsory methods are declared with abstract
    abstract getSepia(): void;
    // methods passed as inheritance to child classes
    getReelTime(): number {
        return 5;
    }
}

// cannot create a object from abstract classes
// const user = new TakePhoto("test", "");
// console.log(user);

class PhotoClick extends TakePhoto {
    constructor(cameraMode: string, filter: string, public burst: string) {
        // pass to parent constructor
        super(cameraMode, filter);
    }
    getSepia(): void {
        console.log("");
    }
}

const user = new PhotoClick("test", "s", "s");
console.log(user.getReelTime());
