// database

// users
var database = [
  {
    username: "ben",
    password: "supersecret",
  },
  {
    username: "sally",
    password: "123",
  },
  {
    username: "tom",
    password: "777",
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

// Check User
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }

    return false;
  }
}

// Sign in
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, wrong username or password");
  }
}
