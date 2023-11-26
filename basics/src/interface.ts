interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrial: () => string;
    startTrial(): string;
    getCoupon(couponname: string, value: number): number;
}

const firstUser: User = {
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

// declaration merging
interface User {
    githubToken: string;
}

// admin inherits user interface
interface Admin extends User {
    role: "admin";
}

const firstAdmin: Admin = {
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
