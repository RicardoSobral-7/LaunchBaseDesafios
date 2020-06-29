const express = require("express");
const nunjuncks = require("nunjucks");
const courses = require("./data")


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
    return res.render("content",{coursesCard: courses});
});

server.get("/course/:id", (req,res)=>{
    const id = req.params.id;
    const course = courses.find((course)=>{
        return course.id == id;
    });
    if(!course){
        return res.send("Course not found!")
    }
    return res.render("course", {item: course});
      
    
     

});

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5500);
