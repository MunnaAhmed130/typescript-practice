// interfaces

interface Author {
    name: string;
    avatar: string;
}

const authorOne: Author = {
    name: "mario",
    avatar: "mario.png",
};

interface Post {
    title: string;
    tags: string[];
    body: string;
    create_at: Date;
    author: Author;
}

// newPost can be implicit or explicit
const newPost: Post = {
    title: "My first post",
    body: "something interesting",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};

// function argument types

function createPost(post: Post): void {
    console.log(
        `${post.author.name} created post titled ${post.title} at ${post.create_at} `
    );
}
createPost(newPost);

// with arrays

let posts: Post[] = [];
posts.push(newPost);

console.log(posts);

// interface 2
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
