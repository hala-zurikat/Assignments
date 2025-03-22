// simple calculator in Java Script....
let x = window.prompt("Please enter the first number:");
let y = window.prompt("Please enter the secound number:");
let operation = window.prompt("Please enter the operation:");

switch (operation) {
  case "+":
    console.log(`num1 + num2 = ${x + y}`);
    break;
  case "-":
    console.log(`num1 - num2 = ${x - y}`);
    break;
  case "/":
    {
      if (y != 0) console.log(`num1 / num2 = ${x / y}`);
      else console.log("Can't divide on zero...");
    }
    break;

  case "*":
    console.log(`num1 * num2 = ${x * y}`);
    break;
  case "%":
    console.log(`num1 % num2 = ${x % y}`);
    break;
  case "^":
    console.log(`num1 ^ num2 = ${x ** y}`);
    break;
  default:
    console.log("Wrong operator...");
}
