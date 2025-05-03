import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  // res.send("<h1>hello</h1>");
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.render("index.ejs", { cart: req.body.name });
});
app.listen(port, () => {
  console.log("server is running");
});
