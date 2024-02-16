import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blog = "";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs")
});
app.get("/add", (req, res) => {
    res.render("add.ejs", {
        title: req.body["title"],
        blog: req.body["blog"],
    })
});
app.post("/view", (req,res) => {
    res.render("view.ejs", {
        
    })
})
app.listen(port, (req,res) => {
    console.log(`Server is listening on ${port}`)
});