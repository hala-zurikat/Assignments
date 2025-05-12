import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = 4000;
let posts = [];
class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});
app.get("/update", (req, res) => {
  res.render("update.ejs");
});
app.get("/create", (req, res) => {
  res.render("create.ejs");
});
app.get("/index", (req, res) => {
  res.render("index.ejs", { posts: posts });
});
app.get("/posts", (req, res) => {
  res.json(posts);
});
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const objpost = posts.find((post) => post.id === id);
  res.json(objpost);
});

app.post("/add", (req, res) => {
  const newPost = {
    title: req.body.title,
    content: req.body.content,
    id: posts.length + 1,
  };
  posts.push(newPost);
  res.status(200).json(newPost);
});
app.put("/add/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newPost = {
    title: req.body.title,
    content: req.body.content,
    id: id,
  };
  const findIndex = posts.findIndex((post) => post.id === id);
  posts[findIndex] = newPost;
  res.json(newPost);
});
app.patch("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.find((post) => post.id === id);
  const newPost = {
    id: id,
    title: req.body.title || newPost.title,
    content: req.body.content || newPost.content,
  };
  posts[postIndex] = newPost;
  res.json(newPost);
});
app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex > -1) {
    posts.splice(postIndex, 1);
    res.sendStatus(200);
  } else {
    res.json(`This id:${id} is not found try again....`);
  }
});
app.listen(port, () => {
  console.log("The server is running...");
});
