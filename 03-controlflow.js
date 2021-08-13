// Control Flow - Conditional execution
// Only run code if true

var name = "Luck";

// If Statements
if (name === "Ben") {
  alert("Hi Ben");
} else if (name === "Susy") {
  alert("Hi Susy");
} else {
  alert("I don't know you");
}

// Logical Operators
// OR
if (name === "Ben" || name === "Susy") {
  alert("Hi Ben OR Susy");
}

// AND
var firstName = "Ben";
var lastName = "Chan";

if (firstName === "Ben" && lastName === "Chan") {
  alert("Hi Ben Chan");
}

// NOT
if (!(name === "Luck")) {
  alert("Hi Ben");
}
