let result;
// function calc(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       console.log(result);

//       break;
//     case "-":
//       result = num1 - num2;
//       console.log(result);

//       break;
//     case "*":
//       result = num1 * num2;
//       console.log(result);

//       break;
//     case "/":
//       result = num1 / num2;
//       console.log(result);

//       break;

//     default:
//       console.log("wrong");
//   }
// }
// console.log(calc(10, 10, "*"));
function calc(num1, num2, operator) {
  if (operator === "+") {
    result = num1 + num2;
    console.log(result);
  } else if (operator === "-") {
    result = num1 - num2;
    console.log(result);
  } else if (operator === "*") {
    result = num1 * num2;
    console.log(result);
  } else if (operator === "/") {
    result = num1 + num2;
    console.log(result);
  } else console.log("wrong");
}

console.log(calc(10, 10, ""));
