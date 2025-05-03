import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
let pass = "halahala123";
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  if (req.body.password == pass)
    res.sendFile(__dirname + "/public/secure.html");
  else res.sendFile(__dirname + "/public/index.html");
  //  res.send(`<!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <title>Document</title>
  //   </head>
  //   <body>
  //    <p>hi my name is hala</p>
  //   </body>
  // </html>
  //`);
});
app.listen(port, () => {
  console.log("hi server");
});
