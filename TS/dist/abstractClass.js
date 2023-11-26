"use strict";
// abstract classes cannot create their own object
// they can be used to as a blueprint for child classes
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // methods passed as inheritance to child classes
    getReelTime() {
        return 5;
    }
}
// cannot create a object from abstract classes
// const user = new TakePhoto("test", "");
// console.log(user);
class PhotoClick extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        // pass to parent constructor
        super(cameraMode, filter);
        this.burst = burst;
    }
    getSepia() {
        console.log("");
    }
}
const user = new PhotoClick("test", "s", "s");
console.log(user.getReelTime());
