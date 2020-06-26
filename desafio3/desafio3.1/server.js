const express = require("express");
const nunjuncks = require("nunjucks");

const server = express();

server.use(express.static("public"));

server.set("view engine", "njk");


nunjuncks.configure("views",{
    express: server
});

server.get("/", (req,res)=>{
    return res.render("sobre");
});

server.get("/content",(req,res)=>{
    return res.render("conteudo");
});

server.listen(5500);