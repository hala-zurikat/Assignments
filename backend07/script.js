import express from "express";
const app = express();
const port = 3000;
const names1 = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Elijah",
  "Ava",
  "William",
  "Sophia",
  "James",
  "Isabella",
];
const names2 = [
  "Lucas",
  "Mia",
  "Henry",
  "Charlotte",
  "Alexander",
  "Amelia",
  "Michael",
  "Harper",
  "Benjamin",
  "Evelyn",
];

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  const newName1 = names1[Math.floor(Math.random() * names1.length)];
  const newName2 = names2[Math.floor(Math.random() * names2.length)];
  res.render("index.ejs", {
    newName1: newName1,
    newName2: newName2,
  });
});

app.listen(port, () => {
  console.log("hello names");
});
