"use strict";
// interfaces
const authorOne = {
    name: "mario",
    avatar: "mario.png",
};
// newPost can be implicit or explicit
const newPost = {
    title: "My first post",
    body: "something interesting",
    tags: ["gaming", "tech"],
    create_at: new Date(),
    author: authorOne,
};
// function argument types
function createPost(post) {
    console.log(`${post.author.name} created post titled ${post.title} at ${post.create_at} `);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
console.log(posts);
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
