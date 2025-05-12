import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const port = 4000;
const posts = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    author: "John Doe",
    content:
      "This post introduces the basics of JavaScript and how to get started with it.",
    date: "2025-05-01",
  },
  {
    id: 2,
    title: "Understanding Flexbox in CSS",
    author: "Hala Zurikat",
    content:
      "Flexbox is a powerful layout module. In this post, we explore how to use it to create responsive layouts.",
    date: "2025-05-05",
  },
  {
    id: 3,
    title: "Why You Should Learn React",
    author: "Jane Smith",
    content:
      "React is one of the most popular JavaScript libraries for building user interfaces. Let's explore why.",
    date: "2025-05-07",
  },
  {
    id: 4,
    title: "Introduction to Node.js",
    author: "Ali Ahmad",
    content:
      "Node.js allows you to run JavaScript on the server. This post covers the basics and common use cases.",
    date: "2025-05-10",
  },
];
const lastId = 5;
class Post {
  constructor(id, title, content, author, date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = this.author;
    this.date = this.date;
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
  const post = posts.find((post) => post.id === id);
  if (post) res.json(post);
  res.status(404).json({ error: "post not found" });
});

app.post("/add", (req, res) => {
  lastId++;
  const newPost = {
    id: lastId,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new date(),
  };
  posts.push(newPost);
  res.status(200).json(newPost);
});
// app.put("/add/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const newPost = {
//     title: req.body.title,
//     content: req.body.content,
//     id: id,
//   };
//   const findIndex = posts.findIndex((post) => post.id === id);
//   posts[findIndex] = newPost;
//   res.json(newPost);
// });
app.patch("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.find((post) => post.id === id);
  const postObj = posts[postIndex];
  const newPost = {
    id: id,
    title: req.body.title || newPost.title,
    content: req.body.content || newPost.content,
    author: req.body.author || newPost.author,
    date: postObj.date,
  };
  posts[postIndex] = newPost;
  res.status(200).json(newPost);
});
app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex > -1) {
    posts.splice(postIndex, 1);
    res.sendStatus(200);
  } else {
    res.status(400).json(`This id:${id} is not found try again....`);
  }
});
app.listen(port, () => {
  console.log("The server:4000 is running...");
});
