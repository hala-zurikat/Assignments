import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = 3000;
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
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/create", (req, res) => {
  res.render("create.ejs");
});
app.get("/index", (req, res) => {
  res.render("index.ejs", { posts: posts });
});
app.get("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) return res.status(404).send("Post not found");

  res.render("update.ejs", {
    editedTitle: post.title,
    editedContent: post.content,
    postId: post.id,
  });
});
app.post("/update", (req, res) => {
  const id = parseInt(req.body.id);
  const post = posts.find((p) => p.id === id);

  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title;
  post.content = req.body.content;

  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return res.status(404).send("Post not found");

  res.render("update.ejs", {
    editedTitle: post.title,
    editedContent: post.content,
    postId: post.id,
  });
});
app.post("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/add", (req, res) => {
  const post = new Post(posts.length + 1, req.body.title, req.body.content);
  posts.push(post);
  res.redirect("/");
});
app.listen(port, () => {
  console.log("the server is running");
});
