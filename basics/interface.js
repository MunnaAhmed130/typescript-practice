var firstUser = {
    dbId: 11,
    email: "",
    userId: 5,
    // method
    // startTrial: function () {
    //     return "";
    // },
    startTrial: function () {
        return "Trial started";
    },
    // not adding parameter doesn't give error
    getCoupon: function (name, off) {
        if (off === void 0) { off = 10; }
        return 0;
    },
    githubToken: "",
};
var firstAdmin = {
    dbId: 11,
    email: "",
    userId: 5,
    // method
    // startTrial: function () {
    //     return "";
    // },
    startTrial: function () {
        return "Trial started";
    },
    // not adding parameter doesn't give error
    getCoupon: function (name, off) {
        if (off === void 0) { off = 10; }
        return 0;
    },
    githubToken: "",
    role: "admin",
};
