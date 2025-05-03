/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
      message: "Hi,Please enter the URL:",
      name: "url",
    },
  ])
  .then((answers) => {
    console.log(answers.url);
    var qr_svg = qr.image(answers.url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr-txt.png"));
    fs.writeFile("qr.txt", answers.url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// import inquirer from "inquirer";
// const Separator = inquirer.Separator;
// inquirer
//   .prompt([
//     {
//       type: "checkbox",
//       name: "order",
//       message: "Hi,please order anything: ",
//       choices: ["pizza", "burgger", "hotdog", "salad"],
//     },
//   ])
//   .then((a) => {
//     const c = a.order;
//     if (c.includes("burgger")) {
//       console.log("good choice");
//     } else {
//       console.log("bad");
//     }
//   });
