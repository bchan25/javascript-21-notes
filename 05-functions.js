// Functions - Perform an ACTION

// alert();
// prompt();

// Function Declaration
function sayHello() {
  console.log("Hello");
}

sayHello();

// Function Expression (Anonymous function)
var sayBye = function () {
  console.log("Bye");
};

sayBye();

// Arguments
// Input -> Function -> Output

function multiply(a, b) {
  return a * b;
}

multiply(5, 10);

// Different return paths
function add(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a + b;
  }
}

add(10, 23);
