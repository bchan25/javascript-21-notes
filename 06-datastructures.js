// Data structures - Store multiple values like a file cabinet

// Arrays - Try to keep same type
var list = ["tiger", "cat", "bear", "bird"];

// Access element start 0
list[0];

// Array has Array
var multiList = [["tiger", "cat", "bear", "bird"]];

multiList[0][2]; //bear

// Array Methods
// Remove first item
list.shift();

// Remove last item
list.pop();

// add to end
list.push("elephant");

// Joins 2 arrays into a new array
var newList = list.concat(["bee", "deer"]);

// Sort alphabetically
list.sort();

// Objects - Collection of PROPERTIES
var user = {
  name: "Ben",
  age: 33,
  hobby: "Games",
  jobSearching: true,
  skills: ["html", "css", "javascript"],
  work: function () {
    console.log("WORKING!!!");
  },
};

// Add to object
user.favourtieFood = "Curry";

// Change value
user.hobby = "Running";

// Method
user.work();

// Array of Objects - User list
var usersAccounts = [
  {
    username: "Ben",
    password: "123",
  },
  {
    username: "Chris",
    password: "1233333",
  },
  {
    username: "Rachel",
    password: "5432",
  },
];
