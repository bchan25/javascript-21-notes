// database

// users
var database = [
  {
    username: "ben",
    password: "supersecret",
  },
];

// news feed
var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all the learning",
  },
  {
    username: "Sally",
    timeline: "Just been to the gym",
  },
];

// User login
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

// Sign in
function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password");
  }
}
