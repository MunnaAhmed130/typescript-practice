"use strict";
const firstUser = {
    dbId: 11,
    email: "",
    userId: 5,
    // method
    // startTrial: function () {
    //     return "";
    // },
    startTrial: () => {
        return "Trial started";
    },
    // not adding parameter doesn't give error
    getCoupon: (name, off = 10) => {
        return 0;
    },
    githubToken: "",
};
const firstAdmin = {
    dbId: 11,
    email: "",
    userId: 5,
    // method
    // startTrial: function () {
    //     return "";
    // },
    startTrial: () => {
        return "Trial started";
    },
    // not adding parameter doesn't give error
    getCoupon: (name, off = 10) => {
        return 0;
    },
    githubToken: "",
    role: "admin",
};
