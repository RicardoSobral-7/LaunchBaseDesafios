const express = require("express");
const nunjuncks = require("nunjucks");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");


nunjuncks.configure("views",{
    express: server
});

server.get("/", (req,res)=>{
    return res.render("about");
});

server.get("/content",(req,res)=>{
    return res.render("content");
});

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5500);