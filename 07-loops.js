// Repeating code

var todos = ["clean room", "exercise", "study", "eat"];

// For loop
for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}

// array foreach
todos.forEach(function (todo, i) {
  console.log(todo, i);
});

// While Loop
var counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++;
}

// do while
var counterTwo = 1;
do {
  console.log(counterTwo);
  counterTwo++;
} while (counterTwo <= 10);
