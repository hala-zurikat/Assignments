import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("2025-5-4");
  const day = today.getDay();
  let adv = "you need to work this day";
  let type = "weekday";
  if (day === 6 || day === 7) {
    type = "weekend";
    adv = "have a good day it's your break";
  }
  res.render("index.ejs", { type: type, adv: adv });
});

app.listen(port, () => {
  console.log("Hi server!");
});
