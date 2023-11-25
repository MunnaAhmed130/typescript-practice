// union with primitive
var score = 33;
score = 44;
score = "55";
// union with type aliases
var newUser = { name: "Joe", id: 452 };
newUser = { name: "Joe", id: 452, role: "" };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        console.log(id + 3);
    }
    console.log("".concat(id));
}
getDbId(2);
getDbId("2");
// array
