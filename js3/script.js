//To find the factorial...
// let num = prompt("Enter a number to find the factorial:");
let num = 5;
let x = 1;
for (let i = num; i >= 1; i--) {
  x *= i;
}
console.log(`the factorial for ${num} is: ${x} `);
//____________________________________________________
// You are building a web application and need to process user input in various ways.
// Below are different scenarios where JavaScript string methods can be applied:

// length - Check if a tweet exceeds 280 characters.
// charAt() - Ensure a username starts with a capital letter.
// toUpperCase() & toLowerCase() - Format text for consistency in titles.
// trim() - Remove extra spaces from an email input.
// slice() - Display a short preview of an article.
// substring() - Mask all but the last 4 digits of a phone number.
// replace() & replaceAll() - Correct spelling mistakes or censor bad words.
// split() - Convert a user's comment into an array of words.
// includes() - Detect restricted words in comments.
// startsWith() & endsWith() - Verify if an uploaded file is an image.
// repeat() - Generate a visual divider for a webpage.
// concat() - Combine two parts of a title into one.
// indexOf () & lastIndexOf() - Find the first and last occurrence of a keyword in a paragraph.
//_____________________________________________________
// length - Check if a tweet exceeds 280 characters.

let input =
  "hi my name is hala how are you !!!! gggggggggggggghbnnnjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjbbbbjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbggggggggggggggg";
if (input.length > 280) {
  console.log("this string exceeds 280 characters.");
}
//_____________________________________________________
// charAt() - Ensure a username starts with a capital letter.

let userName = "Halaeyad";
if (userName.charAt(0) == userName.charAt(0).toUpperCase()) {
  console.log("you can use this user name");
} else console.log("you shold start with uppercase");

//_____________________________________________________
// toUpperCase() & toLowerCase() - Format text for consistency in titles.

let titlee = "this is my title";
console.log(titlee.toUpperCase());
//_____________________________________________________
// trim() - Remove extra spaces from an email input.

let myemail = "           zurikathala@gmail.com ";
console.log(myemail.trim());
//_____________________________________________________
// slice() - Display a short preview of an article.

let arti =
  "hhhhhhhhhhhhhhhhhhhhhhhhhtrttttttttttttttttttttttttttfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffttttttttttttttttttttttjoikmjoiiiiiiiiiiiiiiiiiiiiiiiiiibhjitoorbovvvvvvvvvvvvvvvvvmggrgsssssssss,,piminininicin";
if (arti.length > 150) {
  console.log(arti.slice(0, 150) + "...and more");
}
//_____________________________________________________
// substring() - Mask all but the last 4 digits of a phone number.

let myPhone = "0738523254";
console.log(
  "*".repeat(myPhone.length - 4) + myPhone.substring(myPhone.length - 4)
);
//_____________________________________________________
// replace() & replaceAll() - Correct spelling mistakes or censor bad words.
// includes() - Detect restricted words in comments.

let word = "this is a badwords";
function checkbadwords(word) {
  if (word.includes("badwords")) {
    return word.replaceAll("badwords", "*".repeat(word.length));
  } else return "no badwords";
}
console.log(checkbadwords(word));
//_____________________________________________________
// split() - Convert a user's comment into an array of words.
function converttext(text) {
  return text.split(" ");
}
console.log(converttext("hello my name is haala"));
//_____________________________________________________
// startsWith() & endsWith() - Verify if an uploaded file is an image.
function checkimg(theimgg) {
  let valid = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
  for (let i = 0; i < valid.length; i++) {
    if (theimgg.endsWith(valid[i])) {
      return "this is img";
    }
  }
  return "this is not img";
}
console.log(checkimg("hala.png"));
//_____________________________________________________
// repeat() - Generate a visual divider for a webpage.
function divider(form, count) {
  return form.repeat(count);
}
console.log(divider("❤️", 40));
//_____________________________________________________
// concat() - Combine two parts of a title into one.
let title1 = "this is title one";
let title2 = "this is title two";
console.log(title1 + " " + title2);
//_____________________________________________________
// indexOf () & lastIndexOf() - Find the first and last occurrence of a keyword in a paragraph.
let target = "hala";
let text =
  "hiivdnnnnnnnnnnnnnnnnnnnnnnnnnnnnhalannetovnk;vnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnfiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiidskrskdfskdhalafskdskdsdfslkdvei/0";
let firstoccurrence = text.indexOf(target);
let lastoccurrence = text.lastIndexOf(target);
console.log(
  `the first occurrence is: ${firstoccurrence} and the last occurrence is ${lastoccurrence}`
);
//_____________________________________________________
