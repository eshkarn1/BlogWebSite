import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let blogs = [];
let lastId = 0;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs")
});
app.get("/add", (req, res) => {
    res.render("add.ejs")
});
app.post("/submit", (req,res) => {
    const blog = { 
        id: ++lastId,
        title: req.body["title"],
        content: req.body["blog"],
    };
    
    blogs.push(blog);
    res.redirect("/view")
});
app.get("/view", (req,res) => {
    res.render("view.ejs", {
        blogs: blogs,
    });
});
app.get("/edit/:id", (req, res) => {
    const id = parseInt(req.params["id"]);
    const blog = blogs.find(b => b.id === id);
    res.render("edit.ejs", {
        blog: blog,
    })
});
app.post("/edit/:id", (req,res) => {
    const id = parseInt(req.params["id"]);
    const index = blogs.findIndex(b => b.id === id);
    blogs[index] = {
        id, 
        title: req.body["title"],
        content: req.body["blog"],
    }
    res.redirect("/view");
});
app.listen(port, (req,res) => {
    console.log(`Server is listening on ${port}`)
});